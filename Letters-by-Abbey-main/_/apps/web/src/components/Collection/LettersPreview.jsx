"use client";

import { useState } from "react";
import LetterCard from "@/components/Collection/LetterCard";
import LetterModal from "@/components/Collection/LetterModal";

export default function LettersPreview({ letters }) {
  const [selectedLetter, setSelectedLetter] = useState(null);

  if (!letters || letters.length === 0) {
    return null;
  }

  return (
    <>
      <section className="py-16 md:py-20 bg-[#F9F6F3]">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="font-playfair-display text-3xl md:text-4xl text-[#8B6F47] text-center mb-4">
            Your Custom Letter
          </h2>
          <p className="font-crimson-text text-lg text-[#A08B7A] text-center mb-12 max-w-2xl mx-auto">
            This collection features one beautiful custom letter, carefully crafted to bring you comfort, inspiration,
            and connection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {letters.map((letter) => (
              <LetterCard
                key={letter.id}
                letter={letter}
                onClick={() => setSelectedLetter(letter)}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedLetter && (
        <LetterModal
          letter={selectedLetter}
          onClose={() => setSelectedLetter(null)}
        />
      )}
    </>
  );
}
