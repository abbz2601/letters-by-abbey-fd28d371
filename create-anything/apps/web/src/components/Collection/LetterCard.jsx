export default function LetterCard({ letter, onClick }) {
  return (
    <div
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#F0E6E0]"
      onClick={onClick}
    >
      <h3 className="font-playfair-display text-xl text-[#8B6F47] mb-3">
        {letter.title}
      </h3>

      <div className="flex gap-2 mb-4">
        {letter.occasion && (
          <span className="px-3 py-1 bg-[#F0E6E0] text-[#8B6F47] font-crimson-text text-xs uppercase tracking-wide rounded-full">
            {letter.occasion}
          </span>
        )}
        {letter.tone && (
          <span className="px-3 py-1 bg-[#E8A088] bg-opacity-20 text-[#8B6F47] font-crimson-text text-xs uppercase tracking-wide rounded-full">
            {letter.tone}
          </span>
        )}
      </div>

      <p className="font-crimson-text text-[#A08B7A] text-sm leading-relaxed line-clamp-4">
        {letter.content}
      </p>

      <div className="mt-4 pt-4 border-t border-[#F0E6E0]">
        <p className="font-crimson-text text-[#E8A088] text-sm hover:text-[#D4906E] transition-colors">
          Read full letter →
        </p>
      </div>
    </div>
  );
}
