"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useContactForm();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contactMutation.mutate(formData, {
      onSuccess: () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      {/* Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-[#FEFCFB]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-[#8B6F47] mb-6">
            Get in <span className="italic">Touch</span>
          </h1>
          <p className="font-crimson-text text-xl md:text-2xl text-[#A08B7A] max-w-2xl mx-auto leading-relaxed">
            Have a question, special request, or simply want to share your
            story? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16 bg-[#F9F6F3]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10">
              <h2 className="font-playfair-display text-3xl md:text-4xl text-[#8B6F47] mb-6">
                Send us a <span className="italic">Message</span>
              </h2>

              {contactMutation.isSuccess ? (
                <div className="p-6 bg-[#F9F6F3] border border-[#E8A088] rounded">
                  <h3 className="font-crimson-text text-xl text-[#8B6F47] mb-3">
                    Thank you for reaching out!
                  </h3>
                  <p className="font-crimson-text text-[#A08B7A]">
                    Your message has been received, and we'll respond within 24
                    hours. We appreciate you taking the time to connect with us.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-crimson-text text-sm font-semibold text-[#8B6F47] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={contactMutation.isLoading}
                      className="w-full px-4 py-3 border border-[#E8A088] focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47] focus:ring-opacity-20 outline-none transition-colors font-crimson-text text-[#8B6F47] bg-[#FEFCFB]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-crimson-text text-sm font-semibold text-[#8B6F47] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={contactMutation.isLoading}
                      className="w-full px-4 py-3 border border-[#E8A088] focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47] focus:ring-opacity-20 outline-none transition-colors font-crimson-text text-[#8B6F47] bg-[#FEFCFB]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-crimson-text text-sm font-semibold text-[#8B6F47] mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={contactMutation.isLoading}
                      className="w-full px-4 py-3 border border-[#E8A088] focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47] focus:ring-opacity-20 outline-none transition-colors font-crimson-text text-[#8B6F47] bg-[#FEFCFB]"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="custom">Custom Letter Request</option>
                      <option value="bulk">Bulk Orders</option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-crimson-text text-sm font-semibold text-[#8B6F47] mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={contactMutation.isLoading}
                      rows={6}
                      className="w-full px-4 py-3 border border-[#E8A088] focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47] focus:ring-opacity-20 outline-none transition-colors font-crimson-text text-[#8B6F47] bg-[#FEFCFB] resize-none"
                      placeholder="Share your thoughts, questions, or special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={contactMutation.isLoading}
                    className="w-full bg-[#E8A088] hover:bg-[#D4896A] disabled:bg-[#C4968A] text-white font-crimson-text text-lg py-4 px-6 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8A088] focus:ring-offset-2 flex items-center justify-center gap-2"
                  >
                    {contactMutation.isLoading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Error Message */}
              {contactMutation.isError && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
                  <p className="font-crimson-text text-red-700">
                    {contactMutation.error?.message ||
                      "Something went wrong. Please try again."}
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair-display text-3xl md:text-4xl text-[#8B6F47] mb-8">
                  Let's <span className="italic">Connect</span>
                </h2>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8A088] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-crimson-text text-lg font-semibold text-[#8B6F47] mb-2">
                      Email Us
                    </h3>
                    <p className="font-crimson-text text-[#A08B7A] mb-1">
                      info@lettersbyabbey.com
                    </p>
                    <p className="font-crimson-text text-sm text-[#A08B7A]">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8A088] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-crimson-text text-lg font-semibold text-[#8B6F47] mb-2">
                      Our Studio
                    </h3>
                    <p className="font-crimson-text text-[#A08B7A] mb-1">
                      Victoria, Australia
                    </p>
                    <p className="font-crimson-text text-sm text-[#A08B7A]">
                      Letters crafted with love from our Australian studio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8A088] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-crimson-text text-lg font-semibold text-[#8B6F47] mb-2">
                      Processing Time
                    </h3>
                    <p className="font-crimson-text text-[#A08B7A] mb-1">
                      2-3 business days
                    </p>
                    <p className="font-crimson-text text-sm text-[#A08B7A]">
                      Each letter is carefully handcrafted to order
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="mt-8 p-6 bg-white border border-[#F0E6E0]">
                <h3 className="font-playfair-display text-xl text-[#8B6F47] mb-3">
                  Frequently Asked <span className="italic">Questions</span>
                </h3>
                <p className="font-crimson-text text-[#A08B7A] mb-4">
                  Looking for quick answers? Check our FAQ section for
                  information about shipping, customization options, and more.
                </p>
                <a
                  href="/faq"
                  className="font-crimson-text text-[#E8A088] hover:text-[#8B6F47] font-semibold transition-colors"
                >
                  View FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
    </div>
  );
}
