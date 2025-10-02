import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCollection } from "@/hooks/useCollections";
import { ArrowLeft } from "lucide-react";
import ShopifyBuyButton from "@/components/ShopifyBuyButton";
import TrustBadges from "@/components/TrustBadges";

export default function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: collection, isLoading, error } = useCollection(slug || '');

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
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": collection.name,
          "image": collection.image_url_remote ?? collection.image_url,
          "description": collection.description,
          "offers": {
            "@type": "Offer",
            "url": window.location.href,
            "priceCurrency": "USD",
            "price": collection.price,
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>
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
                src={collection.image_url_remote ?? collection.image_url}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Collection Details */}
            <div>
              <h1 className="font-playfair-display text-4xl md:text-5xl text-foreground mb-4">
                {collection.name}
              </h1>

              <div className="flex items-center gap-4 mb-2">
                <p className="font-playfair-display text-3xl text-foreground">
                  ${parseFloat(collection.price).toFixed(2)}
                </p>
                <p className="font-crimson-text text-base text-muted-foreground">
                  One custom letter included
                </p>
              </div>

              {/* Scarcity Indicator */}
              <p className="font-crimson-text text-sm text-primary mb-6">
                ✓ In stock • Ships within 24 hours
              </p>

              {collection.description && (
                <div className="mb-6">
                  <p className="font-crimson-text text-lg text-foreground leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              )}

              {/* Why Customers Love This */}
              <div className="bg-muted/50 p-6 mb-8 border-l-4 border-primary">
                <h3 className="font-crimson-text font-semibold text-base text-foreground mb-3">
                  Why customers love this collection
                </h3>
                <ul className="space-y-2 font-crimson-text text-base text-muted-foreground">
                  <li>✓ Handwritten with intention and care</li>
                  <li>✓ Arrives at the perfect moment</li>
                  <li>✓ A keepsake to treasure forever</li>
                </ul>
              </div>

              <div className="mb-8">
                <ShopifyBuyButton 
                  productId={collection.shopify_product_id} 
                  containerId={`product-${collection.slug}`}
                />
                <p className="font-crimson-text text-sm text-muted-foreground text-center md:text-left mt-3">
                  🔒 Secure checkout with Shopify
                </p>
              </div>

              <TrustBadges />

              {/* What's Included */}
              <div className="border-t border-muted pt-8 mb-8">
                <h3 className="font-crimson-text font-semibold text-sm uppercase tracking-wide text-foreground mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3 font-crimson-text text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span>One beautifully handwritten custom letter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span>Premium quality paper and envelope</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span>Thoughtful packaging with love</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span>Free shipping on all orders</span>
                  </li>
                </ul>
              </div>

              {/* Perfect for Gifting */}
              <div className="bg-secondary/10 p-6 border border-secondary/20">
                <h3 className="font-playfair-display text-xl text-foreground mb-2 italic">
                  Perfect for gifting
                </h3>
                <p className="font-crimson-text text-base text-muted-foreground">
                  Give the gift of meaningful words. Each letter is crafted to bring comfort, joy, and connection—a gift that will be treasured long after it's received.
                </p>
              </div>

              {/* Abbey's Promise */}
              <div className="mt-8 pt-8 border-t border-muted">
                <p className="font-crimson-text text-base text-muted-foreground italic leading-relaxed">
                  "Every letter I write carries intention and love. Words outlast us—they comfort when we're gone and celebrate while we're here." — Abbey
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
