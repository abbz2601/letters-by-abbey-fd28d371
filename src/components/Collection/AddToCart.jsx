"use client";

import ShopifyBuyButton from "@/components/Collection/ShopifyBuyButton";

export default function AddToCart({ collection }) {
  // Use the shopify_product_id from the collection data
  const shopifyProductId = collection?.shopify_product_id;

  // Generate a unique DOM ID for this component
  const domId = `product-component-${collection?.slug || Math.random().toString(36).substr(2, 9)}`;

  if (!collection) {
    return (
      <div className="text-center p-4">
        <p className="font-crimson-text text-[#A08B7A] mb-4">
          Collection information not available.
        </p>
      </div>
    );
  }

  if (!shopifyProductId) {
    return (
      <div className="text-center p-4 bg-[#F9F6F3] rounded-lg border border-[#F0E6E0]">
        <p className="font-crimson-text text-[#A08B7A] mb-4">
          This collection is currently unavailable for purchase.
        </p>
        <a
          href="/contact"
          className="text-[#8B6F47] hover:text-[#E8A088] font-crimson-text underline"
        >
          Contact us for more information
        </a>
      </div>
    );
  }

  return (
    <div>
      <ShopifyBuyButton
        productId={shopifyProductId}
        domId={domId}
        buttonText={`Add to cart - $${collection.price}`}
      />
      <p className="font-crimson-text text-sm text-[#C5B8A8] text-center mt-3">
        Secure checkout with Shopify
      </p>
    </div>
  );
}
