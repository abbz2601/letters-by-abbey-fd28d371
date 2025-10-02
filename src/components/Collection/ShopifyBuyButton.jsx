"use client";
import { useEffect, useState } from "react";

export default function ShopifyBuyButton({
  productId,
  domId,
  buttonText = "Add to cart",
}) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if environment variables are set
    const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
    const storefrontAccessToken =
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

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

    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    const ShopifyBuyInit = () => {
      try {
        if (typeof window.ShopifyBuy === "undefined") {
          setError("Shopify Buy SDK failed to load");
          setLoading(false);
          return;
        }

        const client = window.ShopifyBuy.buildClient({
          domain: domain,
          storefrontAccessToken: storefrontAccessToken,
        });

        window.ShopifyBuy.UI.onReady(client)
          .then(function (ui) {
            ui.createComponent("product", {
              id: productId,
              node: document.getElementById(domId),
              moneyFormat: "%24%7B%7Bamount%7D%7D",
              options: {
                product: {
                  styles: {
                    product: {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(25% - 20px)",
                        "margin-left": "20px",
                        "margin-bottom": "50px",
                      },
                    },
                    button: {
                      ":hover": { "background-color": "#cf9591" },
                      "background-color": "#e6a6a1",
                      ":focus": { "background-color": "#cf9591" },
                    },
                  },
                  text: { button: buttonText },
                },
                productSet: {
                  styles: {
                    products: {
                      "@media (min-width: 601px)": { "margin-left": "-20px" },
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
                      "background-color": "#e6a6a1",
                      ":focus": { "background-color": "#cf9591" },
                    },
                  },
                  text: { button: buttonText },
                },
                option: {},
                cart: {
                  styles: {
                    button: {
                      ":hover": { "background-color": "#cf9591" },
                      "background-color": "#e6a6a1",
                      ":focus": { "background-color": "#cf9591" },
                    },
                  },
                  text: { total: "Subtotal", button: "Checkout" },
                },
                toggle: {
                  styles: {
                    toggle: {
                      "background-color": "#e6a6a1",
                      ":hover": { "background-color": "#cf9591" },
                      ":focus": { "background-color": "#cf9591" },
                    },
                  },
                },
              },
            })
              .then(() => {
                setLoading(false);
              })
              .catch((err) => {
                console.error("Error creating Shopify component:", err);
                setError("Failed to load product");
                setLoading(false);
              });
          })
          .catch((err) => {
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

    let script = document.querySelector(`script[src="${scriptURL}"]`);
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
  }, [productId, domId, buttonText]);

  // Always render the same loading state initially to prevent hydration mismatch
  if (loading) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded">
        <p className="text-gray-600 text-sm">Loading purchase options...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded">
        <p className="text-red-700 text-sm">
          Unable to load purchase options: {error}
        </p>
      </div>
    );
  }

  return <div id={domId}></div>;
}
