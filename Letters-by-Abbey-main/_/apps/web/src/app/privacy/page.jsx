"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F9F6F3] to-[#FEFCFB] pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-4">
            Privacy <span className="italic">Policy</span>
          </h1>
          <p className="font-crimson-text text-base text-[#A08B7A]">
            Last updated: September 27, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="font-crimson-text text-lg text-[#8B6F47] leading-relaxed">
                At Letters by Abbey ("we," "our," or "us"), we are committed to
                protecting your privacy and personal information. This Privacy
                Policy explains how we collect, use, and safeguard your
                information when you visit our website and purchase our
                handwritten letter collections.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    <strong>Personal Information:</strong> When you make a
                    purchase or sign up for our newsletter, we collect
                    information such as your name, email address, shipping
                    address, and payment information.
                  </p>
                  <p>
                    <strong>Automatically Collected Information:</strong> We may
                    collect certain information automatically when you visit our
                    website, including your IP address, browser type, device
                    information, and browsing behavior.
                  </p>
                  <p>
                    <strong>Communication Information:</strong> If you contact
                    us through email or our contact form, we collect the
                    information you provide in your communications.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  How We Use Your Information
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and fulfill your orders</li>
                    <li>Send you order confirmations and shipping updates</li>
                    <li>Provide customer service and support</li>
                    <li>
                      Send newsletters and marketing communications (with your
                      consent)
                    </li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Information Sharing
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties except in the following
                    circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Service Providers:</strong> We share information
                      with trusted third-party service providers who help us
                      operate our business, such as payment processors
                      (Shopify), shipping carriers, and email marketing
                      services.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your
                      information if required by law or to protect our rights
                      and safety.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a
                      merger, acquisition, or sale of assets, your information
                      may be transferred as part of the transaction.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Data Security
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access,
                    alteration, disclosure, or destruction. All payment
                    information is processed through Shopify's secure,
                    PCI-compliant payment system. However, please note that no
                    method of transmission over the internet or electronic
                    storage is 100% secure.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Your Rights and Choices
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access, update, or delete your personal information</li>
                    <li>Unsubscribe from marketing emails at any time</li>
                    <li>
                      Request a copy of the personal information we hold about
                      you
                    </li>
                    <li>
                      Object to the processing of your personal information in
                      certain circumstances
                    </li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at
                    hello@lettersbyabbey.com.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Cookies and Tracking
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    Our website uses cookies and similar tracking technologies
                    to enhance your browsing experience, analyze website
                    traffic, and remember your preferences. You can control
                    cookie settings through your browser, but please note that
                    disabling cookies may affect the functionality of our
                    website.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Third-Party Links
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    these external sites. We encourage you to review the privacy
                    policies of any third-party websites you visit.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Children's Privacy
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    Our website and services are not intended for children under
                    the age of 13. We do not knowingly collect personal
                    information from children under 13. If we become aware that
                    we have collected personal information from a child under
                    13, we will take steps to delete such information.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Changes to This Policy
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or for other operational,
                    legal, or regulatory reasons. We will notify you of any
                    material changes by posting the updated policy on our
                    website and updating the "Last updated" date at the top of
                    this page.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Contact Us
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    If you have any questions about this Privacy Policy or our
                    privacy practices, please contact us at:
                  </p>
                  <div className="bg-[#F9F6F3] p-6 rounded-lg border border-[#F0E6E0]">
                    <p>
                      <strong>Letters by Abbey</strong>
                    </p>
                    <p>Email: info@lettersbyabbey.com</p>
                    <p>Location: Victoria, Australia</p>
                    <p>
                      Website:{" "}
                      <a
                        href="/contact"
                        className="text-[#E8A088] hover:text-[#D4906E]"
                      >
                        Contact Form
                      </a>
                    </p>
                  </div>
                  <p>
                    We are committed to protecting your privacy in accordance
                    with Australian privacy laws, including the Privacy Act 1988
                    (Cth) and the Australian Privacy Principles.
                  </p>
                </div>
              </div>
            </div>
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
