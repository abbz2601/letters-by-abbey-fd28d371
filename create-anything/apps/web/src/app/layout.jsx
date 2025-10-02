import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export const metadata = {
  title: {
    default: "Letters by Abbey | Handwritten Letters & Meaningful Collections",
    template: "%s | Letters by Abbey",
  },
  description:
    "Discover thoughtfully curated collections of handwritten letters. Each letter is crafted with love and intention to bring comfort, inspiration, and connection to your life.",
  keywords:
    "handwritten letters, letter collections, encouragement letters, meaningful letters, personalized stationery, Letters by Abbey, Australian made",
  authors: [{ name: "Letters by Abbey" }],
  creator: "Letters by Abbey",
  publisher: "Letters by Abbey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lettersbyabbey.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://lettersbyabbey.com",
    siteName: "Letters by Abbey",
    title: "Letters by Abbey | Handwritten Letters & Meaningful Collections",
    description:
      "Discover thoughtfully curated collections of handwritten letters. Each letter is crafted with love and intention to bring comfort, inspiration, and connection to your life.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Letters by Abbey - Handwritten Letters & Meaningful Collections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letters by Abbey | Handwritten Letters & Meaningful Collections",
    description:
      "Discover thoughtfully curated collections of handwritten letters.",
    images: ["/og-image.jpg"],
    creator: "@lettersbyabbey",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-96FCD7QMB1",
  },
  category: "lifestyle",
  // Add JSON-LD structured data for better SEO
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Letters by Abbey",
      description:
        "Thoughtfully curated collections of handwritten letters crafted with love and intention",
      url: "https://lettersbyabbey.com",
      logo: "https://lettersbyabbey.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@lettersbyabbey.com",
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: "Victoria",
        addressCountry: "AU",
      },
      sameAs: [
        "https://instagram.com/lettersbyabbey",
        "https://facebook.com/lettersbyabbey",
      ],
    }),
  },
};

export default function RootLayout({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            gcTime: 1000 * 60 * 30, // 30 minutes (updated from deprecated cacheTime)
            retry: 2,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: "always",
          },
          mutations: {
            retry: 1,
          },
        },
      }),
  );

  useEffect(() => {
    // Load Google Analytics with error handling
    const loadGoogleAnalytics = async () => {
      try {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-96FCD7QMB1";

        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-96FCD7QMB1", {
            page_title: document.title,
            page_location: window.location.href,
          });
        };

        script.onerror = () => {
          console.warn("Failed to load Google Analytics");
        };

        document.head.appendChild(script);
      } catch (error) {
        console.warn("Error loading Google Analytics:", error);
      }
    };

    // Load Facebook Pixel for social media attribution
    const loadFacebookPixel = async () => {
      try {
        !(function (f, b, e, v, n, t, s) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js",
        );

        // Initialize with a placeholder pixel ID (you'll need to replace this)
        // fbq('init', 'YOUR_PIXEL_ID');
        // fbq('track', 'PageView');
      } catch (error) {
        console.warn("Error loading Facebook Pixel:", error);
      }
    };

    loadGoogleAnalytics();
    // Uncomment when you have a Facebook Pixel ID
    // loadFacebookPixel();
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Playfair+Display:ital,wght@0,300;0,400;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-crimson-text antialiased">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
