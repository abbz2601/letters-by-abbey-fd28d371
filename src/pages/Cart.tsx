import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/store/useCart";

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        
        <main className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 text-center">
              Your <span className="italic">Cart</span>
            </h1>
            
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <p className="font-crimson-text text-xl text-muted-foreground mb-8">
                Your cart is currently empty
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200"
              >
                Browse Collections
              </Link>
            </div>
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
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-playfair-display text-4xl md:text-5xl text-foreground">
              Your <span className="italic">Cart</span>
            </h1>
            <button
              onClick={clearCart}
              className="font-crimson-text text-sm text-muted-foreground hover:text-foreground underline"
            >
              Clear Cart
            </button>
          </div>
          
          <div className="space-y-6 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-muted/30 border border-muted">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-playfair-display text-xl text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="font-crimson-text text-base text-muted-foreground mb-2">
                    ${parseFloat(item.price).toFixed(2)} each
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border border-muted hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-crimson-text text-foreground font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border border-muted hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <p className="font-playfair-display text-xl text-foreground font-semibold">
                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-muted pt-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-playfair-display text-2xl text-foreground">Total:</span>
              <span className="font-playfair-display text-3xl text-foreground font-semibold">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200">
              Proceed to Checkout
            </button>
            <p className="font-crimson-text text-sm text-muted-foreground text-center mt-4">
              Secure checkout • Free shipping on all orders
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/shop"
              className="font-crimson-text text-base text-muted-foreground hover:text-foreground underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
