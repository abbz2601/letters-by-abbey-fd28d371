"use client";

import { ArrowLeft, Heart, PenTool, Gift } from "lucide-react";
import { useCollection } from "@/hooks/useProducts";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CollectionDetailPage({ params }) {
  const {
    data: collection,
    isLoading,
    error,
    refetch,
  } = useCollection(params.slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FEFCFB]">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <LoadingSpinner size="lg" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FEFCFB]">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <ErrorMessage
            error={error}
            onRetry={refetch}
            title={
              error.message === "Collection not found"
                ? "Collection Not Found"
                : "Failed to load collection"
            }
          />
        </div>
        <Footer />
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="min-h-screen bg-[#FEFCFB]">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="font-playfair-display text-2xl text-[#8B6F47] mb-4">
              Collection Not Found
            </h1>
            <a
              href="/shop"
              className="font-crimson-text text-[#E8A088] hover:text-[#8B6F47] transition-colors underline"
            >
              Return to Shop
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const shopifyUrl = `https://csvqai-vt.myshopify.com/products/${collection.slug}`;

  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />

      {/* Back Navigation */}
      <div className="border-b border-[#F0E6E0] bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <a
            href="/shop"
            className="inline-flex items-center gap-3 text-[#A08B7A] hover:text-[#8B6F47] transition-all duration-200 font-crimson-text text-lg group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Collections
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F6F3] via-[#FEFCFB] to-[#F0E6E0]"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Collection Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] relative overflow-hidden">
                  {collection.image_url ? (
                    <img
                      src={collection.image_url}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#F9F6F3] to-[#F0E6E0] flex items-center justify-center">
                      <Heart className="w-24 h-24 text-[#E8A088] opacity-40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#E8A088] opacity-30"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E8A088] opacity-15"></div>
              </div>
            </div>

            {/* Collection Info */}
            <div className="order-1 lg:order-2">
              <div className="max-w-xl">
                <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl leading-tight text-[#8B6F47] mb-8">
                  {collection.name}
                </h1>

                <p className="font-crimson-text text-xl md:text-2xl text-[#A08B7A] mb-12 leading-relaxed">
                  {collection.description ||
                    "A thoughtfully curated collection of meaningful letters."}
                </p>

                {/* Price Display */}
                <div className="mb-12">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] font-semibold">
                      ${parseFloat(collection.price).toFixed(2)}
                    </span>
                    <span className="font-crimson-text text-lg text-[#A08B7A]">
                      {collection.letter_count || 0} letters included
                    </span>
                  </div>
                </div>

                {/* Buy Now Button */}
                <div className="space-y-6">
                  <a
                    href={shopifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#8B6F47] hover:bg-[#6D5235] text-white py-5 px-10 font-crimson-text text-xl uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:ring-offset-2 group text-center"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Gift className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Shop Now
                    </span>
                  </a>

                  <p className="font-crimson-text text-sm text-[#C5B8A8] text-center">
                    Secure checkout • Free shipping on all orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Features */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-6">
              What's Included
            </h2>
            <div className="w-24 h-px bg-[#E8A088] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F9F6F3] rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-8 h-8 text-[#8B6F47]" />
              </div>
              <h3 className="font-playfair-display text-xl text-[#8B6F47] mb-3">
                Handwritten Letters
              </h3>
              <p className="font-crimson-text text-[#A08B7A]">
                {collection.letter_count || 0} beautifully crafted letters
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F9F6F3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#8B6F47]" />
              </div>
              <h3 className="font-playfair-display text-xl text-[#8B6F47] mb-3">
                Premium Quality
              </h3>
              <p className="font-crimson-text text-[#A08B7A]">
                Luxurious paper and presentation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F9F6F3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-[#8B6F47]" />
              </div>
              <h3 className="font-playfair-display text-xl text-[#8B6F47] mb-3">
                Thoughtful Curation
              </h3>
              <p className="font-crimson-text text-[#A08B7A]">
                Each letter carefully selected
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F9F6F3] rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-8 h-8 text-[#8B6F47]" />
              </div>
              <h3 className="font-playfair-display text-xl text-[#8B6F47] mb-3">
                Beautiful Packaging
              </h3>
              <p className="font-crimson-text text-[#A08B7A]">
                Ready for gifting or keeping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Letters Preview Section */}
      {collection.letters && collection.letters.length > 0 && (
        <section className="py-16 md:py-20 bg-[#F9F6F3]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-6">
                Letter Previews
              </h2>
              <p className="font-crimson-text text-lg text-[#A08B7A] max-w-2xl mx-auto">
                Get a glimpse of the thoughtful words included in this
                collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collection.letters.slice(0, 3).map((letter, index) => (
                <div key={letter.id} className="bg-white p-8 shadow-sm">
                  <h3 className="font-playfair-display text-xl text-[#8B6F47] mb-4">
                    {letter.title}
                  </h3>
                  <p className="font-crimson-text text-[#A08B7A] line-clamp-4">
                    {letter.content.substring(0, 150)}...
                  </p>
                  {letter.occasion && (
                    <div className="mt-4 pt-4 border-t border-[#F0E6E0]">
                      <span className="font-crimson-text text-sm text-[#C5B8A8] uppercase tracking-wide">
                        {letter.occasion}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        
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
