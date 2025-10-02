import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#FEFCFB]">
      {/* Background Image */}
      <div className="absolute inset-0 m-[10px]">
        <img
          src="https://images.pexels.com/photos/6956629/pexels-photo-6956629.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Beautiful handwritten letters and envelopes"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 40%" }}
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-white leading-tight mb-6">
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl">
              <span className="italic">Meaningful</span> letters
            </span>
            <div className="flex items-center justify-center my-8">
              <div className="w-24 md:w-32 h-px bg-white/60"></div>
            </div>
            <span className="block font-serif text-5xl md:text-7xl lg:text-8xl">
              written with <span className="italic">intention</span>
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Handcrafted letters that offer encouragement, connection, and beauty through words
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