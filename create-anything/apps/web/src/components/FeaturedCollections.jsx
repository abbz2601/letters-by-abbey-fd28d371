"use client";

import { memo } from "react";
import { useProducts } from "@/hooks/useProducts";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from "@/components/ui/ErrorMessage";

const FeaturedCollections = memo(() => {
  const { data: productsData, isLoading, error, refetch } = useProducts();

  if (isLoading) {
    return (
      <section className="py-16 md:py-20 lg:py-24 bg-[#FEFCFB]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#8B6F47] mb-4">
              <span className="italic">Thoughtfully</span> curated
            </h2>
            <p className="text-lg md:text-xl text-[#A08B7A] max-w-2xl mx-auto leading-relaxed">
              Each collection is carefully crafted to meet you exactly where you
              are, offering words of comfort, celebration, and encouragement.
            </p>
          </div>
          <div className="py-12">
            <LoadingSpinner size="lg" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-20 lg:py-24 bg-[#FEFCFB]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ErrorMessage
            error={error}
            onRetry={refetch}
            title="Unable to load collections"
          />
        </div>
      </section>
    );
  }

  const products = productsData?.products?.slice(0, 6) || [];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#FEFCFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#8B6F47] mb-4">
            <span className="italic">Thoughtfully</span> curated
          </h2>
          <p className="text-lg md:text-xl text-[#A08B7A] max-w-2xl mx-auto leading-relaxed">
            Each collection is carefully crafted to meet you exactly where you
            are, offering words of comfort, celebration, and encouragement.
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-[#A08B7A]">
              No products available at this time.
            </p>
          </div>
        )}

        {/* View All Collections Button */}
        <div className="text-center mt-12 md:mt-16">
          <a href="/shop">
            <button className="inline-flex items-center px-8 py-3 bg-[#E8A088] hover:bg-[#D4896A] text-white text-lg uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8A088] focus:ring-offset-2">
              View All Collections
            </button>
          </a>
        </div>
      </div>
    </section>
  );
});

FeaturedCollections.displayName = "FeaturedCollections";

const ProductCard = memo(({ product }) => {
  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.parentElement.innerHTML = `
      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F9F6F3] to-[#F0E6E0]">
        <span class="text-lg text-[#A08B7A]">${product.title}</span>
      </div>
    `;
  };

  const shopifyUrl =
    product.url || `https://csvqai-vt.myshopify.com/products/${product.handle}`;

  return (
    <a
      href={shopifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer block"
    >
      {/* Product Image */}
      <div className="relative aspect-square mb-4 md:mb-6 bg-[#F9F6F3] overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.imageAlt || product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F9F6F3] to-[#F0E6E0]">
            <span className="text-lg text-[#A08B7A]">{product.title}</span>
          </div>
        )}

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-[#8B6F47]/0 group-hover:bg-[#8B6F47]/5 transition-colors duration-300"></div>

        {/* Available badge */}
        {product.available && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm text-[#8B6F47] font-semibold">
              Available
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-[#8B6F47] mb-2 group-hover:text-[#E8A088] transition-colors duration-200">
          {product.title}
        </h3>
        {product.description && (
          <p className="text-base md:text-lg text-[#A08B7A] mb-3 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}
        <p className="text-lg md:text-xl text-[#8B6F47] font-semibold">
          ${product.price} {product.currency}
        </p>
      </div>
    </a>
  );
});

ProductCard.displayName = "ProductCard";

export default FeaturedCollections;
