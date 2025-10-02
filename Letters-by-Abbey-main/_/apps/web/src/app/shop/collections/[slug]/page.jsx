"use client";

import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCollection } from "@/utils/useCollection";
import CollectionLoading from "@/components/Collection/CollectionLoading";
import CollectionError from "@/components/Collection/CollectionError";
import CollectionImage from "@/components/Collection/CollectionImage";
import CollectionDetails from "@/components/Collection/CollectionDetails";
import LettersPreview from "@/components/Collection/LettersPreview";

export default function CollectionDetailPage({ params }) {
  const { collection, letters, loading, error } = useCollection(params.slug);

  const renderContent = () => {
    if (loading) {
      return <CollectionLoading />;
    }

    if (error || !collection) {
      return <CollectionError error={error} />;
    }

    return (
      <>
        {/* Back Navigation */}
        <div className="border-b border-[#F0E6E0]">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-4">
            <a
              href="/shop"
              className="inline-flex items-center gap-2 text-[#A08B7A] hover:text-[#E8A088] transition-colors font-crimson-text"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </a>
          </div>
        </div>

        {/* Collection Hero */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="order-2 lg:order-1">
                <CollectionImage collection={collection} />
              </div>
              <div className="order-1 lg:order-2">
                <CollectionDetails collection={collection} />
              </div>
            </div>
          </div>
        </section>

        <LettersPreview letters={letters} />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Header />
      <main>{renderContent()}</main>
      <Footer />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        
        .font-crimson-text {
          font-family: 'Crimson Text', serif;
        }
        
        .font-playfair-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}
