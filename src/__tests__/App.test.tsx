import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Mock the analytics module
vi.mock('../lib/analytics', () => ({
  initWebVitals: vi.fn(),
  reportPageView: vi.fn(),
  trackEvent: vi.fn(),
}));

// Helper to render components with router context
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('App Component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it('has proper document structure', () => {
    renderWithRouter(<App />);
    
    // Check for main content area
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main-content');
  });

  it('includes accessibility features', () => {
    renderWithRouter(<App />);
    
    // Check for skip link
    const skipLink = screen.getByRole('link', { name: /skip to content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });
});

describe('Performance and SEO', () => {
  it('has proper meta tags', () => {
    expect(document.querySelector('meta[name="description"]')).toBeInTheDocument();
    expect(document.querySelector('meta[property="og:title"]')).toBeInTheDocument();
    expect(document.querySelector('meta[name="viewport"]')).toBeInTheDocument();
  });

  it('includes structured data', () => {
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    expect(structuredData).toBeInTheDocument();
    
    if (structuredData?.textContent) {
      const data = JSON.parse(structuredData.textContent);
      expect(data['@context']).toBe('https://schema.org');
      expect(data['@type']).toBe('Organization');
    }
  });
});

describe('Browser Support', () => {
  it('supports modern JavaScript features', () => {
    expect(typeof Symbol).toBe('function');
    expect(typeof Promise).toBe('function');
    expect(typeof fetch).toBe('function');
  });

  it('has CSS Grid support', () => {
    if (typeof CSS !== 'undefined' && CSS.supports) {
      expect(CSS.supports('display', 'grid')).toBe(true);
    }
  });
});

describe('Security', () => {
  it('has Content Security Policy', () => {
    const csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    expect(csp).toBeInTheDocument();
  });

  it('uses HTTPS for external resources', () => {
    const links = document.querySelectorAll('link[href^="http"]');
    links.forEach(link => {
      expect(link.getAttribute('href')).toMatch(/^https:/);
    });
  });
});