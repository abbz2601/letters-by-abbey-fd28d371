export default function LetterModal({ letter, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-2">
                {letter.title}
              </h2>
              <div className="flex gap-2">
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
            </div>
            <button
              onClick={onClose}
              className="text-[#A08B7A] hover:text-[#8B6F47] text-2xl"
            >
              ×
            </button>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="font-crimson-text text-[#8B6F47] text-lg leading-relaxed whitespace-pre-wrap">
              {letter.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
