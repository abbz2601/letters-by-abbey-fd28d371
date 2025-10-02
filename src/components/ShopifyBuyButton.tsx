import { useEffect, useState } from "react";

interface ShopifyBuyButtonProps {
  productId: string;
  containerId?: string;
}

export default function ShopifyBuyButton({ 
  productId, 
  containerId = "shopify-buy-button" 
}: ShopifyBuyButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    // Normalize product ID - strip GID prefix if present
    const normalizedProductId = productId.replace(/^gid:\/\/shopify\/Product\//, "");

    const scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    const ShopifyBuyInit = () => {
      try {
        if (typeof window.ShopifyBuy === "undefined" || typeof window.ShopifyBuy.UI === "undefined") {
          console.error("Shopify Buy SDK not loaded properly");
          setError("Shopify Buy SDK failed to load");
          setLoading(false);
          return;
        }

        const client = window.ShopifyBuy.buildClient({
          domain: domain,
          storefrontAccessToken: storefrontAccessToken,
        });

        const container = document.getElementById(containerId);
        if (!container) {
          console.error("Container element not found:", containerId);
          setError("Failed to initialize cart");
          setLoading(false);
          return;
        }

        window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
          ui.createComponent("product", {
            id: normalizedProductId,
            node: container,
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
        }).catch((err: any) => {
          console.error("Error initializing Shopify UI:", err);
          setError("Failed to initialize cart");
          setLoading(false);
        });
      } catch (err) {
        console.error("Error in ShopifyBuyInit:", err);
        setError("Cart initialization failed");
        setLoading(false);
      }
    };

    let script = document.querySelector(`script[src="${scriptURL}"]`) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.src = scriptURL;
      script.async = true;
      document.head.appendChild(script);
      script.onload = ShopifyBuyInit;
      script.onerror = () => {
        setError("Failed to load Shopify script");
        setLoading(false);
      };
    } else {
      ShopifyBuyInit();
    }
  }, [productId, containerId]);

  if (loading) {
    return (
      <div className="p-4 bg-muted/30 border border-muted">
        <p className="font-crimson-text text-muted-foreground text-sm">Loading purchase options...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-destructive/10 border border-destructive/30">
        <p className="font-crimson-text text-destructive text-sm">
          Unable to load purchase options: {error}
        </p>
      </div>
    );
  }

  return <div id={containerId}></div>;
}

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}
