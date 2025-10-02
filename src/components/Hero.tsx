import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 m-[10px]">
        <img
          src="https://images.pexels.com/photos/6956629/pexels-photo-6956629.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Beautiful handwritten letters and envelopes"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 40%" }}
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-white leading-tight mb-6 drop-shadow-lg">
            <span className="block font-playfair-display font-normal text-5xl md:text-7xl lg:text-8xl">
              <span className="italic">Meaningful</span> letters
            </span>
            <div className="flex items-center justify-center my-8">
              <div className="w-24 md:w-32 h-px bg-white/60"></div>
            </div>
            <span className="block font-playfair-display font-normal text-5xl md:text-7xl lg:text-8xl">
              written with <span className="italic">intention</span>
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="font-crimson-text text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            Handcrafted letters that offer encouragement, connection, and beauty through words
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Shop Collections
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-foreground font-crimson-text text-lg uppercase tracking-wide transition-all duration-200 hover:scale-105"
            >
              Our Story
            </Link>
          </div>

          {/* Trust Signal */}
          <p className="font-crimson-text text-sm text-white/80 uppercase tracking-widest">
            Handcrafted with love • Free shipping on all orders
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-white/80 animate-bounce" />
      </div>
    </section>
  );
}
