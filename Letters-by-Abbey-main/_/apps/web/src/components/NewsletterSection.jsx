"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Send } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  // Newsletter subscription mutation
  const newsletterMutation = useMutation({
    mutationFn: async (email) => {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error("Failed to subscribe to newsletter");
      }
      return response.json();
    },
    onSuccess: () => {
      setEmail("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      newsletterMutation.mutate(email.trim());
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#FEFCFB] border-t border-[#F0E6E0]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="font-playfair-display text-3xl md:text-4xl lg:text-5xl text-[#8B6F47] mb-4">
            Stay <span className="italic">connected</span>
          </h2>
          <p className="font-crimson-text text-lg md:text-xl text-[#A08B7A] max-w-2xl mx-auto leading-relaxed">
            Receive gentle reminders, new collection announcements, and
            occasional words of encouragement delivered to your inbox like a
            letter from a friend.
          </p>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex border-2 border-[#E8A088] overflow-hidden focus-within:ring-2 focus-within:ring-[#E8A088] focus-within:ring-opacity-30 transition-all duration-200">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-4 bg-white font-crimson-text text-base text-[#8B6F47] placeholder-[#A08B7A] focus:outline-none"
              required
              disabled={newsletterMutation.isLoading}
            />
            <button
              type="submit"
              disabled={newsletterMutation.isLoading || !email.trim()}
              className="px-6 py-4 bg-[#E8A088] hover:bg-[#D4896A] disabled:bg-[#C4968A] text-white font-crimson-text font-semibold transition-colors duration-200 focus:outline-none flex items-center"
            >
              {newsletterMutation.isLoading ? (
                <span className="text-sm">Subscribing...</span>
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Privacy Note */}
          <p className="font-crimson-text text-sm text-[#A08B7A] mt-4 leading-relaxed">
            We respect your privacy. Unsubscribe at any time. No spam, just
            thoughtful content.
          </p>
        </form>

        {/* Success Message */}
        {newsletterMutation.isSuccess && (
          <div className="mt-6 p-4 bg-[#F9F6F3] border border-[#E8A088] rounded">
            <p className="font-crimson-text text-[#8B6F47]">
              Thank you for joining our community! Check your email for a
              welcome letter.
            </p>
          </div>
        )}

        {/* Error Message */}
        {newsletterMutation.isError && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
            <p className="font-crimson-text text-red-700">
              {newsletterMutation.error?.message ||
                "Something went wrong. Please try again."}
            </p>
          </div>
        )}
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
      `}</style>
    </section>
  );
}
