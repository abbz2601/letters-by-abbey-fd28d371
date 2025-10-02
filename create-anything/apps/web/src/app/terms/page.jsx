"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F9F6F3] to-[#FEFCFB] pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-4">
            Terms of <span className="italic">Service</span>
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
                Welcome to Letters by Abbey. These Terms of Service ("Terms")
                govern your use of our website and the purchase of our
                handwritten letter collections. By accessing our website or
                making a purchase, you agree to these Terms.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    By using our website, placing an order, or purchasing our
                    products, you acknowledge that you have read, understood,
                    and agree to be bound by these Terms. If you do not agree to
                    these Terms, please do not use our website or services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Our Products
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    Letters by Abbey offers collections of handwritten letters
                    created with care and intention. Each letter is an original,
                    handcrafted piece written by Abbey. Our products are
                    designed to provide comfort, inspiration, and meaningful
                    connection.
                  </p>
                  <p>
                    All product descriptions, images, and pricing are subject to
                    change without notice. We reserve the right to modify or
                    discontinue products at any time.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Orders and Payment
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Order Acceptance:</strong> All orders are subject
                      to acceptance by us. We reserve the right to refuse or
                      cancel any order for any reason.
                    </li>
                    <li>
                      <strong>Payment:</strong> Payment is processed securely
                      through Shopify. All prices are in USD and do not include
                      applicable taxes or shipping fees.
                    </li>
                    <li>
                      <strong>Order Confirmation:</strong> You will receive an
                      email confirmation once your order is placed and
                      processed.
                    </li>
                    <li>
                      <strong>Billing:</strong> Your payment method will be
                      charged upon order confirmation.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Shipping and Delivery
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We ship within the United States only at this time.</li>
                    <li>
                      Shipping times are estimates and not guaranteed. Delays
                      may occur due to weather, carrier issues, or other factors
                      beyond our control.
                    </li>
                    <li>
                      You are responsible for providing accurate shipping
                      information. We are not liable for packages delivered to
                      incorrect addresses due to customer error.
                    </li>
                    <li>
                      Risk of loss transfers to you upon delivery to the
                      carrier.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Returns and Refunds
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    Due to the personal, handwritten nature of our letters, we
                    generally do not accept returns. However, we are committed
                    to your satisfaction:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      If you receive damaged or defective products, contact us
                      within 7 days of delivery.
                    </li>
                    <li>
                      We may offer exchanges, store credit, or refunds at our
                      discretion for quality issues.
                    </li>
                    <li>
                      Refunds, when approved, will be processed to the original
                      payment method within 5-10 business days.
                    </li>
                    <li>
                      You may cancel your order within 24 hours of placement if
                      it has not yet shipped.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Intellectual Property
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    All content on our website, including text, graphics, logos,
                    images, and letter content, is the property of Letters by
                    Abbey and is protected by copyright and other intellectual
                    property laws. You may not reproduce, distribute, or create
                    derivative works without our express written permission.
                  </p>
                  <p>
                    The handwritten letters you purchase are for personal use
                    only and may not be reproduced, resold, or distributed
                    commercially.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  User Conduct
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>When using our website, you agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Use the website for any unlawful purpose or in violation
                      of these Terms
                    </li>
                    <li>
                      Attempt to gain unauthorized access to our systems or
                      other users' accounts
                    </li>
                    <li>
                      Upload or transmit viruses, malware, or other harmful code
                    </li>
                    <li>
                      Interfere with the website's operation or other users'
                      enjoyment of the website
                    </li>
                    <li>
                      Reproduce or distribute our content without permission
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Disclaimers and Limitation of Liability
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    <strong>Disclaimer:</strong> Our website and products are
                    provided "as is" without warranties of any kind. We do not
                    guarantee that our website will be error-free, secure, or
                    continuously available.
                  </p>
                  <p>
                    <strong>Limitation of Liability:</strong> To the maximum
                    extent permitted by law, Letters by Abbey shall not be
                    liable for any indirect, incidental, special, or
                    consequential damages arising from your use of our website
                    or products. Our total liability shall not exceed the amount
                    you paid for the specific product giving rise to the claim.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Privacy
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    Your privacy is important to us. Please review our{" "}
                    <a
                      href="/privacy"
                      className="text-[#E8A088] hover:text-[#D4906E]"
                    >
                      Privacy Policy
                    </a>
                    to understand how we collect, use, and protect your personal
                    information.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Indemnification
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    You agree to indemnify and hold harmless Letters by Abbey
                    from any claims, damages, or expenses arising from your use
                    of our website, violation of these Terms, or infringement of
                    any rights of third parties.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Governing Law and Disputes
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of Victoria, Australia. Any disputes arising
                    from these Terms or your use of our website shall be subject
                    to the exclusive jurisdiction of the courts of Victoria,
                    Australia.
                  </p>
                  <p>
                    For consumers within Australia, nothing in these Terms
                    limits, excludes or modifies any consumer guarantees under
                    the Australian Consumer Law where such limitation, exclusion
                    or modification would be prohibited by law.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Changes to Terms
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    We reserve the right to modify these Terms at any time.
                    Changes will be effective immediately upon posting on our
                    website. Your continued use of our website after changes
                    constitutes acceptance of the modified Terms.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Severability
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    If any provision of these Terms is found to be
                    unenforceable, the remaining provisions shall remain in full
                    force and effect.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4 font-crimson-text text-base text-[#8B6F47] leading-relaxed">
                  <p>
                    If you have any questions about these Terms of Service,
                    please contact us at:
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
