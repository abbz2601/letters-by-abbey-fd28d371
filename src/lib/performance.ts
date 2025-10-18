// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Mark the start of a performance measurement
  startMeasure(name: string): void {
    if (typeof performance !== 'undefined') {
      performance.mark(`${name}-start`);
    }
  }

  // Mark the end of a performance measurement and store the result
  endMeasure(name: string): number {
    if (typeof performance !== 'undefined') {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      
      const measure = performance.getEntriesByName(name, 'measure')[0];
      if (measure) {
        this.metrics.set(name, measure.duration);
        
        // Log slow operations in development
        if (process.env.NODE_ENV === 'development' && measure.duration > 1000) {
          console.warn(`Slow operation detected: ${name} took ${measure.duration.toFixed(2)}ms`);
        }
        
        return measure.duration;
      }
    }
    return 0;
  }

  // Get all recorded metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Check if the browser supports modern features
  static checkBrowserSupport(): Record<string, boolean> {
    const features = {
      serviceWorker: 'serviceWorker' in navigator,
      webP: typeof createImageBitmap !== 'undefined',
      intersectionObserver: 'IntersectionObserver' in window,
      requestIdleCallback: 'requestIdleCallback' in window,
      webVitals: 'PerformanceObserver' in window,
      modernJS: typeof Symbol !== 'undefined' && typeof Promise !== 'undefined',
      fetch: 'fetch' in window,
      localStorage: (() => {
        try {
          return typeof localStorage !== 'undefined';
        } catch {
          return false;
        }
      })(),
      cssGrid: CSS.supports('display', 'grid'),
      cssCustomProperties: CSS.supports('(--foo: red)'),
    };

    // Log unsupported features in development
    if (process.env.NODE_ENV === 'development') {
      const unsupported = Object.entries(features)
        .filter(([, supported]) => !supported)
        .map(([feature]) => feature);
      
      if (unsupported.length > 0) {
        console.warn('Unsupported browser features:', unsupported);
      }
    }

    return features;
  }

  // Monitor resource loading performance
  static monitorResources(): void {
    if (typeof performance === 'undefined') return;

    // Monitor navigation timing
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        console.log('Navigation Performance:', {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          loadComplete: navigation.loadEventEnd - navigation.fetchStart,
          firstByte: navigation.responseStart - navigation.requestStart,
          domInteractive: navigation.domInteractive - navigation.fetchStart,
        });
      }
    });

    // Monitor resource timing
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 1000) {
          console.warn(`Slow resource: ${entry.name} took ${entry.duration.toFixed(2)}ms`);
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }
}

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  PerformanceMonitor.monitorResources();
  
  // Check browser support and log results
  const browserSupport = PerformanceMonitor.checkBrowserSupport();
  console.log('Browser Support Check:', browserSupport);
}