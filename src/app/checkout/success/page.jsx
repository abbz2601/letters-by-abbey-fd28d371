"use client";

import { useEffect } from 'react';
import { Check, Heart, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useCartStore from '@/utils/useCart';

export default function CheckoutSuccessPage() {
  const clearCart = useCartStore(state => state.clearCart);

  useEffect(() => {
    // Clear the cart after successful checkout
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />
      
      {/* Success Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-[#8B6F47] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-4">
              Thank you for your order!
            </h1>
            <p className="font-crimson-text text-lg text-[#A08B7A] max-w-2xl mx-auto leading-relaxed">
              Your payment has been successfully processed. We're so excited to share 
              these beautiful handwritten letters with you.
            </p>
          </div>

          {/* What's Next */}
          <div className="bg-[#F9F6F3] rounded-lg p-8 mb-12 text-left max-w-2xl mx-auto">
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6 text-center">
              What happens next?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E8A088] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-crimson-text text-sm font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-crimson-text font-semibold text-[#8B6F47] mb-1">
                    Order Confirmation
                  </h3>
                  <p className="font-crimson-text text-[#A08B7A] text-sm">
                    You'll receive an email confirmation with your order details within minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E8A088] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-crimson-text text-sm font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-crimson-text font-semibold text-[#8B6F47] mb-1">
                    Preparation
                  </h3>
                  <p className="font-crimson-text text-[#A08B7A] text-sm">
                    Abbey will carefully prepare and package your letters with love and intention.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E8A088] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-crimson-text text-sm font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-crimson-text font-semibold text-[#8B6F47] mb-1">
                    Shipping
                  </h3>
                  <p className="font-crimson-text text-[#A08B7A] text-sm">
                    Your letters will be shipped within 1-2 business days with tracking information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#E8A088] text-white font-crimson-text text-base uppercase tracking-wide hover:bg-[#D4906E] transition-colors rounded-lg"
            >
              <Heart className="w-4 h-4" />
              Continue Shopping
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#8B6F47] text-[#8B6F47] font-crimson-text text-base uppercase tracking-wide hover:bg-[#8B6F47] hover:text-white transition-colors rounded-lg"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </div>

          {/* Trust Message */}
          <div className="border-t border-[#F0E6E0] pt-8">
            <p className="font-crimson-text text-[#A08B7A] text-sm max-w-2xl mx-auto">
              If you have any questions about your order, please don't hesitate to reach out. 
              We're here to ensure your experience with Letters by Abbey is truly special.
            </p>
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