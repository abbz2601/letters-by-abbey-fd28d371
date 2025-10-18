import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
        </div>
        <h2 className="font-playfair-display text-3xl text-foreground mb-2">
          Letters by Abbey
        </h2>
        <p className="font-crimson-text text-lg text-muted-foreground">
          Loading your experience{dots}
        </p>
      </div>
    </div>
  );
}