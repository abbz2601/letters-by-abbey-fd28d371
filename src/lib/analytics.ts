import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

// Function to send analytics data
function sendToAnalytics(metric: any) {
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
  
  // Send to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }
}

export function initWebVitals() {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  try {
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics); // Replaced FID with INP (new metric)
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch (error) {
    console.warn('Web Vitals monitoring failed:', error);
  }
}

// Report page views to Google Analytics
export function reportPageView(url: string, title?: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_TRACKING_ID', {
      page_title: title,
      page_location: url,
    });
  }
}

// Track custom events
export function trackEvent(eventName: string, parameters: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Event tracked:', eventName, parameters);
  }
}