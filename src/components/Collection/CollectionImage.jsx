import { Heart, Star } from "lucide-react";

export default function CollectionImage({ collection }) {
  return (
    <div className="aspect-[4/5] bg-gradient-to-br from-[#F9F6F3] to-[#F0E6E0] rounded-lg overflow-hidden relative">
      {collection.image_url ? (
        <img
          src={collection.image_url}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <Heart className="w-16 h-16 text-[#E8A088] mx-auto mb-4 opacity-60" />
            <p className="font-crimson-text text-[#A08B7A]">
              {collection.name}
            </p>
          </div>
        </div>
      )}

      {collection.is_featured && (
        <div className="absolute top-6 left-6 bg-[#E8A088] text-white px-4 py-2 rounded-full">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span className="font-crimson-text text-sm uppercase tracking-wide">
              Featured
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
