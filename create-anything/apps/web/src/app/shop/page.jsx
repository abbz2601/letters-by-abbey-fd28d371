"use client";

import { memo, useEffect } from "react";
import { ArrowRight, Heart } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShopPage() {
  const { data: productsData, isLoading, error, refetch } = useProducts();

  // Client-side SEO enhancement
  useEffect(() => {
    document.title = "Shop Letter Collections - Letters by Abbey";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Browse our thoughtfully curated collections of handwritten letters. Find the perfect meaningful letters for encouragement, celebration, or connection.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F9F6F3] to-[#FEFCFB] pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h1 className="font-playfair-display text-4xl md:text-6xl text-[#8B6F47] mb-6 font-light">
            Our <span className="italic font-normal">Letter</span> Collections
          </h1>
          <p className="font-crimson-text text-lg md:text-xl text-[#A08B7A] max-w-3xl mx-auto leading-relaxed">
            Thoughtfully curated collections of handwritten letters, each
            crafted with love and intention to bring comfort, inspiration, and
            connection to your life.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {isLoading && (
            <div className="py-20">
              <LoadingSpinner size="lg" />
            </div>
          )}

          {error && (
            <ErrorMessage
              error={error}
              onRetry={refetch}
              title="Unable to load collections"
            />
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {productsData?.products?.length > 0 ? (
                productsData.products.map((product) => (
                  <CollectionCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-[#A08B7A]">
                    No collections available at this time.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Schema markup for products */}
      {!isLoading && !error && productsData?.products && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Letters by Abbey Collections",
              description:
                "Handwritten letter collections crafted with love and intention",
              numberOfItems: productsData.products.length,
              itemListElement: productsData.products.map((product, index) => ({
                "@type": "Product",
                position: index + 1,
                name: product.title,
                description: product.description,
                image: product.image,
                offers: {
                  "@type": "Offer",
                  price: product.price,
                  priceCurrency: product.currency || "AUD",
                  availability: product.available
                    ? "https://schema.org/InStock"
                    : "https://schema.org/OutOfStock",
                  url: product.url,
                },
              })),
            }),
          }}
        />
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Playfair+Display:ital,wght@0,300;0,400;1,400&display=swap');
        
        .font-crimson-text {
          font-family: 'Crimson Text', serif;
        }
        
        .font-playfair-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}

const CollectionCard = memo(({ product }) => {
  const shopifyUrl =
    product.url || `https://csvqai-vt.myshopify.com/products/${product.handle}`;

  return (
    <div className="group cursor-pointer">
      <a
        href={shopifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-[#F9F6F3] to-[#F0E6E0] overflow-hidden mb-6 relative">
          {product.image ? (
            <img
              src={product.image}
              alt={product.imageAlt || product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#E8A088] mx-auto mb-4 opacity-60" />
                <p className="font-crimson-text text-[#A08B7A] text-sm">
                  {product.title}
                </p>
              </div>
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

          {/* Available badge */}
          {product.available && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="font-crimson-text text-xs uppercase tracking-wide text-[#8B6F47]">
                Available
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h3 className="font-playfair-display text-2xl text-[#8B6F47] mb-2 group-hover:text-[#E8A088] transition-colors">
            {product.title}
          </h3>

          {product.description && (
            <p className="font-crimson-text text-base text-[#A08B7A] mb-4 leading-relaxed line-clamp-3">
              {product.description}
            </p>
          )}

          <div className="flex items-center justify-between">
            <div>
              <p className="font-crimson-text text-sm text-[#C5B8A8] mb-1">
                Handcrafted letters
              </p>
              <p className="font-playfair-display text-xl text-[#8B6F47]">
                ${product.price} {product.currency}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#E8A088] group-hover:gap-3 transition-all">
              <span className="font-crimson-text text-sm uppercase tracking-wide">
                Shop Now
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
});

CollectionCard.displayName = "CollectionCard";
