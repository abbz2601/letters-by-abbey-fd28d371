import { useEffect, useState, useRef } from "react";

interface ShopifyBuyButtonProps {
  productId: string;
  containerId?: string;
}

// Load Shopify Buy SDK once and cache the promise
let shopifyScriptPromise: Promise<void> | null = null;

function loadShopifyScript(): Promise<void> {
  if (shopifyScriptPromise) return shopifyScriptPromise;

  const scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  const existingScript = document.querySelector(`script[src="${scriptURL}"]`) as HTMLScriptElement;

  if (existingScript && typeof window.ShopifyBuy !== "undefined") {
    shopifyScriptPromise = Promise.resolve();
    return shopifyScriptPromise;
  }

  shopifyScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = scriptURL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Shopify Buy SDK"));
    document.head.appendChild(script);
  });

  return shopifyScriptPromise;
}

export default function ShopifyBuyButton({ 
  productId, 
  containerId = "shopify-buy-button" 
}: ShopifyBuyButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const uiInstanceRef = useRef<any>(null);

  const initializeShopify = async () => {
    try {
      setLoading(true);
      setError(null);

      const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
      const storefrontAccessToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

      if (!domain || !storefrontAccessToken) {
        setError("Shopify configuration not found");
        setLoading(false);
        return;
      }

      if (!productId) {
        setError("No Shopify product ID provided");
        setLoading(false);
        return;
      }

      if (!containerRef.current) {
        setError("Container not ready");
        setLoading(false);
        return;
      }

      // Normalize product ID - strip GID prefix if present
      const normalizedProductId = productId.replace(/^gid:\/\/shopify\/Product\//, "");

      // Load the Shopify Buy SDK
      await loadShopifyScript();

      if (typeof window.ShopifyBuy === "undefined" || typeof window.ShopifyBuy.UI === "undefined") {
        throw new Error("Shopify Buy SDK not loaded properly");
      }

      // Clean up any existing UI instance
      if (uiInstanceRef.current) {
        try {
          uiInstanceRef.current.destroy();
        } catch (e) {
          console.warn("Error destroying previous UI instance:", e);
        }
        uiInstanceRef.current = null;
      }

      // Clear container
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }

      const client = window.ShopifyBuy.buildClient({
        domain: domain,
        storefrontAccessToken: storefrontAccessToken,
      });

      const ui = await window.ShopifyBuy.UI.onReady(client);
      
      if (!containerRef.current) {
        throw new Error("Container removed during initialization");
      }

      uiInstanceRef.current = ui.createComponent("product", {
        id: normalizedProductId,
        node: containerRef.current,
        moneyFormat: "${{amount}}",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "0",
                },
              },
              button: {
                ":hover": { "background-color": "#cf9591" },
                "background-color": "#E8A088",
                ":focus": { "background-color": "#cf9591" },
                "color": "#fff",
                "font-family": "Crimson Text, serif",
                "font-size": "16px",
                "padding": "12px 32px",
                "text-transform": "uppercase",
                "letter-spacing": "0.05em",
              },
            },
            text: { button: "Add to Cart" },
            contents: {
              img: false,
              title: false,
              price: false,
            },
          },
          cart: {
            styles: {
              button: {
                ":hover": { "background-color": "#cf9591" },
                "background-color": "#E8A088",
                ":focus": { "background-color": "#cf9591" },
                "color": "#fff",
                "font-family": "Crimson Text, serif",
              },
            },
            text: { total: "Subtotal", button: "Checkout" },
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#E8A088",
                ":hover": { "background-color": "#cf9591" },
                ":focus": { "background-color": "#cf9591" },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                ":hover": { "background-color": "#cf9591" },
                "background-color": "#E8A088",
                ":focus": { "background-color": "#cf9591" },
                "color": "#fff",
              },
            },
          },
        },
      });

      setLoading(false);
    } catch (err) {
      console.error("Error initializing Shopify:", err);
      setError(err instanceof Error ? err.message : "Failed to initialize cart");
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeShopify();

    return () => {
      if (uiInstanceRef.current) {
        try {
          uiInstanceRef.current.destroy();
        } catch (e) {
          console.warn("Error destroying UI instance on unmount:", e);
        }
        uiInstanceRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [productId, containerId]);

  return (
    <div className="relative">
      <div ref={containerRef} id={containerId} className={loading || error ? "opacity-0" : "opacity-100 transition-opacity duration-300"} />
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-muted/30 border border-muted">
          <p className="font-crimson-text text-muted-foreground text-sm">Loading purchase options...</p>
        </div>
      )}

      {error && (
        <div className="mt-3 p-4 bg-destructive/10 border border-destructive/30">
          <p className="font-crimson-text text-destructive text-sm mb-3">
            Unable to load purchase options: {error}
          </p>
          <button 
            onClick={initializeShopify}
            className="font-crimson-text text-sm text-foreground underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}
