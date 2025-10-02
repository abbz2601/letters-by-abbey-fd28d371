import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The letter arrived at the perfect time. It felt like Abbey knew exactly what I needed to hear.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      quote: "A gift that truly meant something. My friend kept it on her nightstand and reads it every morning.",
      author: "Jessica L.",
      rating: 5,
    },
    {
      quote: "Words that will be treasured forever. This isn't just a letter, it's a keepsake full of love.",
      author: "Emily R.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair-display text-4xl md:text-5xl text-foreground mb-4">
            Words that <span className="italic">resonate</span>
          </h2>
          <p className="font-crimson-text text-lg text-muted-foreground">
            Hear from those who've been touched by these letters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-crimson-text text-lg text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <p className="font-crimson-text text-sm text-muted-foreground font-semibold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
