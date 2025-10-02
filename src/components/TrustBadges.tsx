import { Shield, Truck, RefreshCw, Heart } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Checkout",
      description: "SSL encrypted",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "All orders",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "7-day policy",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Handcrafted",
      description: "With love",
    },
  ];

  return (
    <section className="py-8 bg-muted">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="text-center transition-transform duration-200 hover:scale-105 cursor-default"
            >
              <div className="flex justify-center text-primary mb-3 transition-colors">
                {badge.icon}
              </div>
              <h3 className="font-crimson-text text-sm font-semibold text-foreground mb-1">
                {badge.title}
              </h3>
              <p className="font-crimson-text text-xs text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Social Proof */}
        <div className="mt-8 text-center">
          <p className="font-crimson-text text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">500+</span> letters sent with love
          </p>
        </div>
      </div>
    </section>
  );
}
