"use client";

import { ArrowRight, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// SEO Meta tags for Shop page
export const meta = () => [
  { title: "Shop Letter Collections - Letters by Abbey | Handcrafted Letters" },
  { name: "description", content: "Browse our thoughtfully curated collections of handwritten letters. Find the perfect meaningful letters for encouragement, celebration, or connection." },
  { name: "keywords", content: "buy handwritten letters, letter collections, encouragement letters shop, meaningful letters for sale, personalized stationery, Abbey letters shop" },
  { property: "og:title", content: "Shop Letter Collections - Letters by Abbey" },
  { property: "og:description", content: "Browse our thoughtfully curated collections of handwritten letters. Find the perfect meaningful letters for any occasion." },
  { property: "og:url", content: "https://lettersbyabbey.com/shop" },
  { name: "twitter:title", content: "Shop Letter Collections - Letters by Abbey" },
  { name: "twitter:description", content: "Browse our thoughtfully curated collections of handwritten letters." }
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F9F6F3] to-[#FEFCFB] pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h1 className="font-playfair-display text-4xl md:text-6xl text-[#8B6F47] mb-6">
            Our <span className="italic">Letter</span> Collections
          </h1>
          <p className="font-crimson-text text-lg md:text-xl text-[#A08B7A] max-w-3xl mx-auto leading-relaxed">
            Thoughtfully curated collections of handwritten letters, each crafted with love and intention 
            to bring comfort, inspiration, and connection to your life.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Love Letters Collection */}
            <div className="group cursor-pointer">
              <a href="/shop/collections/love-letters" className="block">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#F9F6F3] to-[#F0E6E0] rounded-lg overflow-hidden mb-6 relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-12 h-12 text-[#E8A088] mx-auto mb-4 opacity-60" />
                      <p className="font-crimson-text text-[#A08B7A] text-sm">Love Letters</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="font-playfair-display text-2xl text-[#8B6F47] mb-2 group-hover:text-[#E8A088] transition-colors">
                    Love Letters
                  </h3>
                  <p className="font-crimson-text text-base text-[#A08B7A] mb-4 leading-relaxed line-clamp-3">
                    Heartfelt letters expressing love and affection
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-crimson-text text-sm text-[#C5B8A8] mb-1">One custom letter</p>
                      <p className="font-playfair-display text-xl text-[#8B6F47]">$25.00</p>
                    </div>
                    <div className="flex items-center gap-2 text-[#E8A088] group-hover:gap-3 transition-all">
                      <span className="font-crimson-text text-sm uppercase tracking-wide">View Collection</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Gratitude Collection */}
            <div className="group cursor-pointer">
              <a href="/shop/collections/gratitude" className="block">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#F9F6F3] to-[#F0E6E0] rounded-lg overflow-hidden mb-6 relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-12 h-12 text-[#E8A088] mx-auto mb-4 opacity-60" />
                      <p className="font-crimson-text text-[#A08B7A] text-sm">Gratitude Collection</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="font-playfair-display text-2xl text-[#8B6F47] mb-2 group-hover:text-[#E8A088] transition-colors">
                    Gratitude Collection
                  </h3>
                  <p className="font-crimson-text text-base text-[#A08B7A] mb-4 leading-relaxed line-clamp-3">
                    Letters expressing heartfelt appreciation
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-crimson-text text-sm text-[#C5B8A8] mb-1">One custom letter</p>
                      <p className="font-playfair-display text-xl text-[#8B6F47]">$22.00</p>
                    </div>
                    <div className="flex items-center gap-2 text-[#E8A088] group-hover:gap-3 transition-all">
                      <span className="font-crimson-text text-sm uppercase tracking-wide">View Collection</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Encouragement Letters */}
            <div className="group cursor-pointer">
              <a href="/shop/collections/encouragement" className="block">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#F9F6F3] to-[#F0E6E0] rounded-lg overflow-hidden mb-6 relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-12 h-12 text-[#E8A088] mx-auto mb-4 opacity-60" />
                      <p className="font-crimson-text text-[#A08B7A] text-sm">Encouragement Letters</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="font-playfair-display text-2xl text-[#8B6F47] mb-2 group-hover:text-[#E8A088] transition-colors">
                    Encouragement Letters
                  </h3>
                  <p className="font-crimson-text text-base text-[#A08B7A] mb-4 leading-relaxed line-clamp-3">
                    Uplifting letters for difficult times
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-crimson-text text-sm text-[#C5B8A8] mb-1">One custom letter</p>
                      <p className="font-playfair-display text-xl text-[#8B6F47]">$23.00</p>
                    </div>
                    <div className="flex items-center gap-2 text-[#E8A088] group-hover:gap-3 transition-all">
                      <span className="font-crimson-text text-sm uppercase tracking-wide">View Collection</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

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

function CollectionCard({ collection }) {
  return (
    <div className="group cursor-pointer">
      <a href={`/shop/collections/${collection.slug}`} className="block">
        {/* Collection Image */}
        <div className="aspect-[4/5] bg-gradient-to-br from-[#F9F6F3] to-[#F0E6E0] rounded-lg overflow-hidden mb-6 relative">
          {collection.image_url ? (
            <img
              src={collection.image_url}
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#E8A088] mx-auto mb-4 opacity-60" />
                <p className="font-crimson-text text-[#A08B7A] text-sm">
                  {collection.name}
                </p>
              </div>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          
          {/* Featured badge */}
          {collection.is_featured && (
            <div className="absolute top-4 left-4 bg-[#E8A088] text-white px-3 py-1 rounded-full">
              <span className="font-crimson-text text-xs uppercase tracking-wide">Featured</span>
            </div>
          )}
        </div>

        {/* Collection Info */}
        <div>
          <h3 className="font-playfair-display text-2xl text-[#8B6F47] mb-2 group-hover:text-[#E8A088] transition-colors">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="font-crimson-text text-base text-[#A08B7A] mb-4 leading-relaxed line-clamp-3">
              {collection.description}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-crimson-text text-sm text-[#C5B8A8] mb-1">
                One custom letter
              </p>
              <p className="font-playfair-display text-xl text-[#8B6F47]">
                ${collection.price}
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-[#E8A088] group-hover:gap-3 transition-all">
              <span className="font-crimson-text text-sm uppercase tracking-wide">
                View Collection
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}