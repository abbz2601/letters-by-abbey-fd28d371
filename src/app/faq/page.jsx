"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Mail, Package, CreditCard, Truck, RotateCcw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqData = [
  {
    category: "Orders & Shipping",
    icon: Package,
    questions: [
      {
        question: "How long does shipping take?",
        answer: "We typically ship within 1-2 business days. Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) is available at checkout."
      },
      {
        question: "Do you ship internationally?",
        answer: "Currently, we ship within the United States only. We're working on expanding to international shipping soon. Sign up for our newsletter to be notified when international shipping becomes available."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on the carrier's website."
      },
      {
        question: "What if my package is lost or damaged?",
        answer: "We're committed to ensuring your letters arrive safely. If your package is lost or damaged during shipping, contact us immediately and we'll work with you to resolve the issue, including sending a replacement if necessary."
      }
    ]
  },
  {
    category: "Products & Collections",
    icon: Heart,
    questions: [
      {
        question: "What makes your letters special?",
        answer: "Each letter is carefully handwritten with premium ink on beautiful stationery. They're crafted with intention, love, and thoughtful words designed to bring comfort, inspiration, and connection to your life."
      },
      {
        question: "Can I see a sample before purchasing?",
        answer: "While we don't offer physical samples, you can preview excerpts from letters in each collection on our product pages. This gives you a sense of the tone and style of writing you can expect."
      },
      {
        question: "Are the letters really handwritten?",
        answer: "Yes! Every single letter is personally handwritten by Abbey. No printing or reproduction - each letter is an original, handcrafted piece."
      },
      {
        question: "Can I request custom letters or personalization?",
        answer: "Currently, our collections feature pre-written letters with universal themes. We're exploring custom letter options for the future. Contact us if you have specific needs and we'll see how we can help."
      },
      {
        question: "How many letters are in each collection?",
        answer: "The number of letters varies by collection, typically ranging from 5-15 letters. Each product page clearly shows how many letters are included in that specific collection."
      }
    ]
  },
  {
    category: "Payment & Returns",
    icon: CreditCard,
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Shop Pay, and Apple Pay through our secure Shopify checkout."
      },
      {
        question: "Is my payment information secure?",
        answer: "Absolutely. All payments are processed through Shopify's secure, encrypted payment system. We never store your payment information on our servers."
      },
      {
        question: "What is your return policy?",
        answer: "Due to the personal, handwritten nature of our letters, we don't accept returns unless there's a quality issue with your order. If you're not satisfied, please contact us within 7 days and we'll work to make it right."
      },
      {
        question: "Can I cancel my order?",
        answer: "You can cancel your order within 24 hours of placing it, as long as it hasn't shipped. After that, please contact us and we'll see what options are available."
      }
    ]
  },
  {
    category: "About Letters by Abbey",
    icon: Mail,
    questions: [
      {
        question: "Who is Abbey?",
        answer: "Abbey is a passionate letter writer who believes in the healing power of handwritten words. She started Letters by Abbey to share encouragement, comfort, and connection through the timeless art of letter writing."
      },
      {
        question: "What inspired Letters by Abbey?",
        answer: "The Oracle Post was born from Abbey's personal journey and the recognition that in our digital world, people deeply crave authentic, personal connection. Handwritten letters offer something that emails and texts simply cannot."
      },
      {
        question: "How do I stay updated on new collections?",
        answer: "Subscribe to our newsletter to be the first to know about new letter collections, special offers, and behind-the-scenes stories from Abbey. You can sign up at the bottom of our homepage."
      },
      {
        question: "Do you have a physical store?",
        answer: "Currently, we operate online only. This allows us to focus on the quality and care that goes into each handwritten letter while keeping our collections accessible to people everywhere."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F9F6F3] to-[#FEFCFB] pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="font-playfair-display text-4xl md:text-6xl text-[#8B6F47] mb-6">
            Frequently Asked <span className="italic">Questions</span>
          </h1>
          <p className="font-crimson-text text-lg md:text-xl text-[#A08B7A] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our handwritten letter collections, 
            shipping, and the heart behind Letters by Abbey.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg border border-[#F0E6E0] overflow-hidden">
                {/* Category Header */}
                <div className="bg-[#F9F6F3] px-6 py-4 border-b border-[#F0E6E0]">
                  <div className="flex items-center gap-3">
                    <category.icon className="w-5 h-5 text-[#E8A088]" />
                    <h2 className="font-crimson-text font-semibold text-lg text-[#8B6F47] uppercase tracking-wide">
                      {category.category}
                    </h2>
                  </div>
                </div>

                {/* Questions */}
                <div className="divide-y divide-[#F0E6E0]">
                  {category.questions.map((item, questionIndex) => {
                    const isOpen = openItems[`${categoryIndex}-${questionIndex}`];
                    
                    return (
                      <div key={questionIndex}>
                        <button
                          className="w-full px-6 py-5 text-left hover:bg-[#FEFCFB] transition-colors focus:outline-none focus:bg-[#FEFCFB]"
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="font-crimson-text font-semibold text-base md:text-lg text-[#8B6F47] pr-4">
                              {item.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-[#A08B7A] flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#A08B7A] flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-5">
                            <p className="font-crimson-text text-base text-[#A08B7A] leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-[#F9F6F3]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-playfair-display text-3xl md:text-4xl text-[#8B6F47] mb-4">
            Still have questions?
          </h2>
          <p className="font-crimson-text text-lg text-[#A08B7A] mb-8 max-w-2xl mx-auto">
            We're here to help! Feel free to reach out with any questions 
            about our letter collections or your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#8B6F47] text-white font-crimson-text text-base uppercase tracking-wide hover:bg-[#A08B7A] transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
            <a
              href="mailto:hello@lettersbyabbey.com"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#8B6F47] text-[#8B6F47] font-crimson-text text-base uppercase tracking-wide hover:bg-[#8B6F47] hover:text-white transition-colors"
            >
              Email Directly
            </a>
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