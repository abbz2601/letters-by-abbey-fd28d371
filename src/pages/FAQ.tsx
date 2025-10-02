import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Browse our collections, select the letter you'd like, and add it to your cart. Once you're ready, proceed to checkout and complete your purchase through our secure payment system.",
    },
    {
      question: "Can I request custom letters?",
      answer: "Absolutely! I love creating personalized letters for special occasions. Please contact me directly to discuss your custom letter needs.",
    },
    {
      question: "How long does it take to receive my letter?",
      answer: "Each letter is handwritten with care. Standard processing time is 5-7 business days, plus shipping time. Rush orders may be available - please contact me for details.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, I ship within the United States. International shipping options are coming soon!",
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "Your satisfaction is my priority. If you're not completely happy with your letter, please contact me within 7 days of receipt to discuss a solution.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 text-center">
            Frequently Asked <span className="italic">Questions</span>
          </h1>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-muted pb-8">
                <h3 className="font-crimson-text text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {faq.question}
                </h3>
                <p className="font-crimson-text text-lg text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="font-crimson-text text-lg text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
