import AddToCart from "@/components/Collection/AddToCart";

export default function CollectionDetails({ collection }) {
  return (
    <div>
      <h1 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-4">
        {collection.name}
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <p className="font-playfair-display text-3xl text-[#8B6F47]">
          ${collection.price}
        </p>
        <p className="font-crimson-text text-base text-[#A08B7A]">
          {collection.letter_count}{" "}
          {collection.letter_count === 1 ? "letter" : "letters"} included
        </p>
      </div>

      {collection.description && (
        <div className="mb-8">
          <p className="font-crimson-text text-lg text-[#8B6F47] leading-relaxed">
            {collection.description}
          </p>
        </div>
      )}

      <div className="mb-8">
        <AddToCart collection={collection} />
      </div>

      <div className="border-t border-[#F0E6E0] pt-8">
        <h3 className="font-crimson-text font-semibold text-sm uppercase tracking-wide text-[#8B6F47] mb-4">
          What's Included
        </h3>
        <ul className="space-y-2 font-crimson-text text-base text-[#A08B7A]">
          <li>• {collection.letter_count} beautifully handwritten letters</li>
          <li>• Premium quality paper and envelopes</li>
          <li>• Thoughtful packaging with love</li>
          <li>• Perfect for gifting or personal collection</li>
        </ul>
      </div>
    </div>
  );
}
