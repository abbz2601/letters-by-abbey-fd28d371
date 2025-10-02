import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        <h1 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] text-center mb-4">
          Returns & <span className="italic">Refunds</span>
        </h1>
        <p className="font-crimson-text text-lg text-[#A08B7A] text-center mb-12">
          Your satisfaction is our heartfelt priority
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Our Promise to You
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                We believe every letter should bring you joy and comfort. If for
                any reason you're not completely satisfied with your purchase,
                we're here to make it right within our return window. Your
                happiness is our mission.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Return Policy
            </h2>
            <div className="space-y-6">
              <div className="bg-[#F9F6F3] rounded-lg p-6">
                <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                  14-Day Return Window
                </h3>
                <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                  You have 14 days from the date of delivery to return your
                  letter collection for a full refund. Simply contact us to
                  initiate the return process.
                </p>
              </div>

              <div className="bg-[#F9F6F3] rounded-lg p-6">
                <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                  Condition Requirements
                </h3>
                <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                  <strong>Important:</strong> Due to the personal nature of our
                  handwritten letters, all items must be returned in their
                  original, unopened condition with all packaging materials
                  intact. Once a letter collection has been opened or read, it
                  cannot be returned for hygienic and personal privacy reasons.
                </p>
              </div>

              <div className="bg-[#F9F6F3] rounded-lg p-6">
                <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                  Return Shipping
                </h3>
                <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                  Customers are responsible for return shipping costs. We
                  recommend using a tracked shipping service to ensure your
                  return reaches us safely. Returns must be sent to our address
                  in Victoria, Australia.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Refund Process
            </h2>
            <div className="space-y-4">
              <div className="bg-[#F9F6F3] rounded-lg p-6">
                <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                  Processing Time
                </h3>
                <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                  Once we receive your returned items and confirm they meet our
                  return conditions, we'll process your refund within 5-7
                  business days. You'll receive an email confirmation when the
                  refund has been issued.
                </p>
              </div>

              <div className="bg-[#F9F6F3] rounded-lg p-6">
                <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                  Refund Method
                </h3>
                <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                  Refunds will be issued to your original payment method in
                  Australian Dollars (AUD). Please allow 5-10 business days for
                  the refund to appear on your statement, depending on your bank
                  or credit card company.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              How to Initiate a Return
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <ol className="font-crimson-text text-[#A08B7A] space-y-3">
                <li>
                  1. Contact us at{" "}
                  <a
                    href="mailto:info@lettersbyabbey.com"
                    className="text-[#E8A088] hover:underline"
                  >
                    info@lettersbyabbey.com
                  </a>{" "}
                  within 14 days of delivery
                </li>
                <li>2. Provide your order number and reason for return</li>
                <li>
                  3. Ensure your items are in original, unopened condition
                </li>
                <li>4. Package items securely with original packaging</li>
                <li>
                  5. Ship to our Victoria, Australia address (provided via
                  email)
                </li>
                <li>6. Send us the tracking number for your return shipment</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Non-Returnable Items
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                The following items cannot be returned:
              </p>
              <ul className="font-crimson-text text-[#A08B7A] mt-3 list-disc list-inside space-y-1">
                <li>Opened or read letter collections</li>
                <li>Items damaged by customer after delivery</li>
                <li>Items returned after the 14-day window</li>
                <li>Custom or personalized orders (when applicable)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Damaged or Lost Items
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed mb-4">
                If your letter collection arrives damaged or goes missing during
                shipping, please contact us within 48 hours of the expected
                delivery date. We'll investigate with our shipping partner and
                arrange a replacement if necessary.
              </p>
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                For damaged items, please take photos of the packaging and
                contents, and send them to us along with your order number.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Contact Information
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed mb-4">
                For all return and refund inquiries, please contact us at:
              </p>
              <div className="font-crimson-text text-[#A08B7A]">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@lettersbyabbey.com"
                    className="text-[#E8A088] hover:underline"
                  >
                    info@lettersbyabbey.com
                  </a>
                </p>
                <p>Location: Victoria, Australia</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center">
          <p className="font-crimson-text text-[#A08B7A] mb-4">
            Questions about returns or need help?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#8B6F47] text-white px-8 py-3 font-crimson-text text-base uppercase tracking-wide hover:bg-[#A08B7A] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

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
