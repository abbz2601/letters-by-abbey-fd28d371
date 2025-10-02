import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCollection } from "@/hooks/useCollections";
import { useCart } from "@/store/useCart";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

export default function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: collection, isLoading, error } = useCollection(slug || '');
  const addItem = useCart(state => state.addItem);

  const handleAddToCart = () => {
    if (collection) {
      addItem(collection);
      toast.success('Added to cart!', {
        description: `${collection.name} has been added to your cart.`,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <main className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="aspect-square bg-muted"></div>
              <div className="space-y-4">
                <div className="h-12 bg-muted w-3/4"></div>
                <div className="h-6 bg-muted w-1/4"></div>
                <div className="h-24 bg-muted"></div>
                <div className="h-12 bg-muted"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !collection) {
    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <main className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h1 className="font-playfair-display text-4xl text-foreground mb-4">
              Collection Not Found
            </h1>
            <p className="font-crimson-text text-lg text-muted-foreground mb-8">
              The collection you're looking for doesn't exist.
            </p>
            <Link to="/shop" className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-colors">
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <Link to="/shop" className="inline-flex items-center gap-2 font-crimson-text text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Collection Image */}
            <div className="relative aspect-square bg-muted overflow-hidden">
              <img
                src={collection.image_url}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Collection Details */}
            <div>
              <h1 className="font-playfair-display text-4xl md:text-5xl text-foreground mb-4">
                {collection.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <p className="font-playfair-display text-3xl text-foreground">
                  ${parseFloat(collection.price).toFixed(2)}
                </p>
                <p className="font-crimson-text text-base text-muted-foreground">
                  One custom letter included
                </p>
              </div>

              {collection.description && (
                <div className="mb-8">
                  <p className="font-crimson-text text-lg text-foreground leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              )}

              <div className="mb-8">
                <button
                  onClick={handleAddToCart}
                  className="w-full md:w-auto px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200"
                >
                  Add to Cart - ${parseFloat(collection.price).toFixed(2)}
                </button>
                <p className="font-crimson-text text-sm text-muted-foreground text-center md:text-left mt-3">
                  Handcrafted with love and intention
                </p>
              </div>

              <div className="border-t border-muted pt-8">
                <h3 className="font-crimson-text font-semibold text-sm uppercase tracking-wide text-foreground mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2 font-crimson-text text-base text-muted-foreground">
                  <li>• One beautifully handwritten custom letter</li>
                  <li>• Premium quality paper and envelope</li>
                  <li>• Thoughtful packaging with love</li>
                  <li>• Perfect for gifting or personal keepsake</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
