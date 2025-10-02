import { Shield, Truck, RefreshCw, Heart } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Checkout",
      description: "SSL encrypted payments",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "On all orders",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "7-day return policy",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Handcrafted",
      description: "Made with love",
    },
  ];

  return (
    <section className="py-8 bg-muted">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-foreground mb-3">
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
      </div>
    </section>
  );
}
