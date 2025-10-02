import { Link } from "react-router-dom";

// Hardcoded featured collections
const FEATURED_COLLECTIONS = [
  {
    id: "1",
    name: "Love Letters",
    slug: "love-letters",
    description: "Heartfelt letters expressing love and affection",
    image_url: "https://images.pexels.com/photos/6956627/pexels-photo-6956627.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    price: "25.00",
  },
  {
    id: "2",
    name: "Gratitude Collection",
    slug: "gratitude",
    description: "Letters expressing heartfelt appreciation",
    image_url: "https://images.pexels.com/photos/6956629/pexels-photo-6956629.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    price: "22.00",
  },
  {
    id: "3",
    name: "Encouragement Letters",
    slug: "encouragement",
    description: "Uplifting letters for difficult times",
    image_url: "https://images.pexels.com/photos/6956630/pexels-photo-6956630.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    price: "23.00",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            <span className="italic">Thoughtfully</span> curated
          </h2>
          <p className="font-crimson-text text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each collection is carefully crafted to meet you exactly where you are, offering words of comfort, celebration, and encouragement.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {FEATURED_COLLECTIONS.map((collection) => (
            <Link
              key={collection.id}
              to={`/shop/collections/${collection.slug}`}
              className="group cursor-pointer block"
            >
              {/* Collection Image */}
              <div className="relative aspect-square mb-4 md:mb-6 bg-muted overflow-hidden">
                <img
                  src={collection.image_url}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-crimson-text text-sm text-foreground font-semibold">
                    Custom Letter
                  </span>
                </div>
              </div>

              {/* Collection Info */}
              <div className="text-center">
                <h3 className="font-playfair-display text-xl md:text-2xl lg:text-3xl text-foreground mb-2 group-hover:text-secondary transition-colors duration-200">
                  {collection.name}
                </h3>
                <p className="font-crimson-text text-base md:text-lg text-muted-foreground mb-3 leading-relaxed">
                  {collection.description}
                </p>
                <p className="font-crimson-text text-lg md:text-xl text-foreground font-semibold">
                  ${parseFloat(collection.price).toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop">
            <button className="inline-flex items-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200">
              View All Collections
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
