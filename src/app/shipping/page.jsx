import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        <h1 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] text-center mb-4">
          Shipping & <span className="italic">Delivery</span>
        </h1>
        <p className="font-crimson-text text-lg text-[#A08B7A] text-center mb-12">
          Delivering handwritten love across Australia and beyond
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Shipping Options
            </h2>
            <div className="space-y-6">
              <div className="bg-[#F9F6F3] rounded-lg p-6">
                <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                  Standard Shipping (5-8 Business Days)
                </h3>
                <p className="font-crimson-text text-[#A08B7A] mb-2">
                  $5.25 AUD for all Australian orders
                </p>
                <p className="font-crimson-text text-[#A08B7A]">
                  Free shipping on orders $75 AUD and above
                </p>
              </div>

              <div className="bg-[#F9F6F3] rounded-lg p-6">
                <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                  Express Shipping (2-4 Business Days)
                </h3>
                <p className="font-crimson-text text-[#A08B7A]">
                  $9.99 AUD for all Australian orders
                </p>
              </div>

              <div className="bg-[#F9F6F3] rounded-lg p-6">
                <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                  International Shipping (7-21 Business Days)
                </h3>
                <p className="font-crimson-text text-[#A08B7A]">
                  $20.00 AUD for international orders
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Processing Time
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                Each letter collection is carefully prepared and packaged by
                hand in Victoria, Australia. Please allow 2-3 business days for
                processing before your order ships. Orders placed after 2 PM
                AEST will be processed the following business day.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Shipping Zones
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F9F6F3] rounded-lg p-6">
                  <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                    Australia Wide
                  </h3>
                  <p className="font-crimson-text text-[#A08B7A]">
                    We ship to all Australian states and territories including
                    Tasmania and remote areas. PO boxes and parcel lockers
                    accepted.
                  </p>
                </div>

                <div className="bg-[#F9F6F3] rounded-lg p-6">
                  <h3 className="font-crimson-text font-semibold text-lg text-[#8B6F47] mb-3">
                    International Shipping
                  </h3>
                  <p className="font-crimson-text text-[#A08B7A]">
                    Available to New Zealand, United States, Canada, United
                    Kingdom, and most European countries. Customs duties may
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Package Care
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed mb-4">
                Your letter collections are packaged with the utmost care in
                eco-friendly materials. Each package includes:
              </p>
              <ul className="font-crimson-text text-[#A08B7A] space-y-2">
                <li>• Protective tissue paper wrapping</li>
                <li>• Elegant branded packaging</li>
                <li>• Moisture-resistant envelope protection</li>
                <li>• A personal note of gratitude from Victoria</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Order Tracking
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                Once your order ships, you'll receive a confirmation email with
                tracking information. You can track your package through
                Australia Post or our international shipping partners. Contact
                us directly at{" "}
                <a
                  href="mailto:info@lettersbyabbey.com"
                  className="text-[#E8A088] hover:underline"
                >
                  info@lettersbyabbey.com
                </a>{" "}
                for any shipping inquiries.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              Delivery Issues
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                If your package is lost, damaged, or goes missing, please
                contact us within 7 days of the expected delivery date. We'll
                work with you and Australia Post (or our international carriers)
                to resolve the issue promptly. For damaged items, photos may be
                requested for insurance claims.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-playfair-display text-2xl text-[#8B6F47] mb-6">
              International Customers
            </h2>
            <div className="bg-[#F9F6F3] rounded-lg p-6">
              <p className="font-crimson-text text-[#A08B7A] leading-relaxed">
                Please note that international orders may be subject to customs
                duties, taxes, and fees imposed by your country. These charges
                are the responsibility of the recipient and are not included in
                our shipping costs. Delivery times may vary due to customs
                processing.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center">
          <p className="font-crimson-text text-[#A08B7A] mb-4">
            Have questions about shipping?
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
