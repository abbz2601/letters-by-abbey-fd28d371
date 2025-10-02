"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  useEffect(() => {
    // Check if Shopify cart exists and redirect to it
    if (typeof window !== 'undefined' && window.ShopifyBuy) {
      // Open Shopify cart if it exists
      const shopifyCart = document.querySelector('.shopify-buy__cart');
      if (shopifyCart) {
        shopifyCart.click();
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />
      
      <main className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl text-[#8B6F47] mb-6">
              Your Cart
            </h1>
            <p className="font-crimson-text text-xl text-[#A08B7A]">
              All purchases are handled securely through Shopify
            </p>
          </div>

          {/* Cart Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-[#F9F6F3] rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-[#8B6F47]" />
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-[#F9F6F3] rounded-lg p-8 mb-8">
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-4">
              How to Access Your Cart
            </h2>
            <div className="space-y-4 font-crimson-text text-lg text-[#A08B7A]">
              <p>
                When you add items to your cart on any collection page, a Shopify cart will appear.
              </p>
              <p>
                You can access your cart by:
              </p>
              <ul className="list-disc list-inside space-y-2 max-w-md mx-auto text-left">
                <li>Adding any item to cart from a collection page</li>
                <li>Looking for the cart icon that appears after adding items</li>
                <li>Proceeding directly to Shopify's secure checkout</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <a
              href="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#8B6F47] hover:bg-[#6D5235] text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200 rounded-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              Browse Collections
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="font-crimson-text text-sm text-[#A08B7A]">
              Start shopping to add items to your Shopify cart
            </p>
          </div>

          {/* Alternative Links */}
          <div className="mt-12 pt-8 border-t border-[#E8A088]/20">
            <p className="font-crimson-text text-[#A08B7A] mb-4">
              Need help with your order?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="text-[#8B6F47] hover:text-[#E8A088] font-crimson-text underline"
              >
                Contact Us
              </a>
              <a
                href="/shipping"
                className="text-[#8B6F47] hover:text-[#E8A088] font-crimson-text underline"
              >
                Shipping Info
              </a>
              <a
                href="/returns"
                className="text-[#8B6F47] hover:text-[#E8A088] font-crimson-text underline"
              >
                Returns Policy
              </a>
            </div>
          </div>
        </div>
      </main>

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