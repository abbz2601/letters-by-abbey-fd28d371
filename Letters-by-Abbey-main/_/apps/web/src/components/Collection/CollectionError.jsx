import { ArrowLeft } from "lucide-react";

export default function CollectionError({ error }) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <p className="font-crimson-text text-[#8B6F47] text-lg mb-4">
          {error || "Collection not found"}
        </p>
        <a
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-2 bg-[#E8A088] text-white font-crimson-text hover:bg-[#D4906E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </a>
      </div>
    </div>
  );
}
