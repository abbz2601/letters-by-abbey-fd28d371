"use client";

import { useState, useEffect } from "react";
import { X, Heart, Mail } from "lucide-react";
import { useNewsletterSubscribe } from "@/hooks/useNewsletter";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);

  const {
    mutate: subscribe,
    isPending: isLoading,
    isSuccess,
    error,
  } = useNewsletterSubscribe();

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("newsletter-popup-shown");
    if (hasSeenPopup) {
      setHasShown(true);
      return;
    }

    // Show popup on exit intent or after 30 seconds
    let timeoutId;
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem("newsletter-popup-shown", "true");
      }
    };

    const showAfterTime = () => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem("newsletter-popup-shown", "true");
      }
    };

    // Add mouse leave listener for exit intent
    document.addEventListener("mouseleave", handleMouseLeave);

    // Show after 30 seconds as fallback
    timeoutId = setTimeout(showAfterTime, 30000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await subscribe({ email });
      // Success is handled by the success state
    } catch (err) {
      // Error is handled by the error state
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || (hasShown && !isVisible)) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white max-w-md w-full p-8 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#A08B7A] hover:text-[#8B6F47] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          // Success state
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F9F6F3] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#E8A088]" />
            </div>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-4">
              Welcome to our community!
            </h2>
            <p className="font-crimson-text text-[#A08B7A] mb-6">
              Thank you for joining our newsletter. You'll receive thoughtful
              updates and be the first to know about new letter collections.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-[#8B6F47] hover:bg-[#6D5235] text-white py-3 px-6 font-crimson-text text-sm uppercase tracking-wide transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          // Signup form
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F9F6F3] rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-[#E8A088]" />
            </div>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-4">
              Join Our Letter Community
            </h2>
            <p className="font-crimson-text text-[#A08B7A] mb-6">
              Get exclusive updates, early access to new collections, and
              thoughtful words delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-[#F0E6E0] focus:border-[#E8A088] focus:outline-none font-crimson-text text-[#8B6F47]"
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-crimson-text">
                  {error.message || "Something went wrong. Please try again."}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-[#8B6F47] hover:bg-[#6D5235] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-6 font-crimson-text text-sm uppercase tracking-wide transition-colors"
              >
                {isLoading ? "Subscribing..." : "Join Our Community"}
              </button>
            </form>

            <p className="font-crimson-text text-xs text-[#C5B8A8] mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>

            <button
              onClick={handleClose}
              className="mt-4 text-[#A08B7A] hover:text-[#8B6F47] font-crimson-text text-sm underline transition-colors"
            >
              No thanks, continue browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
