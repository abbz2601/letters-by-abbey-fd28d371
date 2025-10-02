"use client";

// HARDCODED FEATURED COLLECTIONS DATA - NO API CALLS
const FEATURED_COLLECTIONS_DATA = [
  {
    "id": "1",
    "name": "Love Letters",
    "slug": "love-letters", 
    "description": "Heartfelt letters expressing love and affection",
    "image_url": "/images/love-collection.jpg",
    "price": "25.00",
    "price_range": "$20 - $35",
    "letter_count": 5
  },
  {
    "id": "2", 
    "name": "Gratitude Collection",
    "slug": "gratitude",
    "description": "Letters expressing heartfelt appreciation", 
    "image_url": "/images/gratitude-collection.jpg",
    "price": "22.00",
    "price_range": "$15 - $30",
    "letter_count": 4
  },
  {
    "id": "3",
    "name": "Encouragement Letters", 
    "slug": "encouragement",
    "description": "Uplifting letters for difficult times",
    "image_url": "/images/encouragement-collection.jpg",
    "price": "23.00", 
    "price_range": "$18 - $28",
    "letter_count": 6
  }
];

export default function FeaturedCollections() {
  // Use hardcoded data instead of API calls
  const collections = FEATURED_COLLECTIONS_DATA;
  const isLoading = false;
  const error = null;

  if (isLoading) {
    return (
      <section className="py-16 md:py-20 lg:py-24 bg-[#FEFCFB]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl text-[#8B6F47] mb-4">
              <span className="italic">Thoughtfully</span> curated
            </h2>
            <p className="font-crimson-text text-lg md:text-xl text-[#A08B7A] max-w-2xl mx-auto leading-relaxed">
              Each collection is carefully crafted to meet you exactly where you
              are, offering words of comfort, celebration, and encouragement.
            </p>
          </div>

          {/* Loading skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="aspect-square bg-[#F0E6E0] mb-4 md:mb-6"></div>
                <div className="text-center">
                  <div className="h-6 bg-[#F0E6E0] mb-2 w-3/4 mx-auto"></div>
                  <div className="h-4 bg-[#F0E6E0] mb-3 w-full mx-auto"></div>
                  <div className="h-5 bg-[#F0E6E0] w-1/4 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-20 lg:py-24 bg-[#FEFCFB]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-4">
            <span className="italic">Something</span> went wrong
          </h2>
          <p className="font-crimson-text text-lg text-[#A08B7A]">
            We're having trouble loading our collections. Please try again
            later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#FEFCFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl text-[#8B6F47] mb-4">
            <span className="italic">Thoughtfully</span> curated
          </h2>
          <p className="font-crimson-text text-lg md:text-xl text-[#A08B7A] max-w-2xl mx-auto leading-relaxed">
            Each collection is carefully crafted to meet you exactly where you
            are, offering words of comfort, celebration, and encouragement.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href={`/shop/collections/${collection.slug}`}
              className="group cursor-pointer block"
            >
              {/* Collection Image */}
              <div className="relative aspect-square mb-4 md:mb-6 bg-[#F9F6F3] overflow-hidden">
                <img
                  src={collection.image_url}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-[#8B6F47]/0 group-hover:bg-[#8B6F47]/5 transition-colors duration-300"></div>

                {/* Letter count badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-crimson-text text-sm text-[#8B6F47] font-semibold">
                    Custom Letter
                  </span>
                </div>
              </div>

              {/* Collection Info */}
              <div className="text-center">
                <h3 className="font-playfair-display text-xl md:text-2xl lg:text-3xl text-[#8B6F47] mb-2 group-hover:text-[#E8A088] transition-colors duration-200">
                  {collection.name}
                </h3>
                <p className="font-crimson-text text-base md:text-lg text-[#A08B7A] mb-3 leading-relaxed">
                  {collection.description}
                </p>
                <p className="font-crimson-text text-lg md:text-xl text-[#8B6F47] font-semibold">
                  ${parseFloat(collection.price).toFixed(2)}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center mt-12 md:mt-16">
          <a href="/shop">
            <button className="inline-flex items-center px-8 py-3 bg-[#E8A088] hover:bg-[#D4896A] text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8A088] focus:ring-offset-2">
              View All Collections
            </button>
          </a>
        </div>
      </div>

      {/* Styles for fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        
        .font-crimson-text {
          font-family: 'Crimson Text', serif;
        }
        
        .font-playfair-display {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
