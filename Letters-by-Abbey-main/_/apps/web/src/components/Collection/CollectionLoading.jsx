export default function CollectionLoading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#E8A088] border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="font-crimson-text text-[#8B6F47]">
          Loading collection...
        </p>
      </div>
    </div>
  );
}
