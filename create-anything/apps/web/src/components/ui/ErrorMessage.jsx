import { AlertCircle, RefreshCw } from 'lucide-react';

export default function ErrorMessage({ 
  error, 
  onRetry, 
  title = 'Something went wrong',
  showRetry = true 
}) {
  return (
    <div className="text-center py-8 px-4">
      <div className="max-w-md mx-auto">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-[#8B6F47] mb-2">
          {title}
        </h3>
        <p className="text-[#A08B7A] mb-4">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        {showRetry && onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8A088] hover:bg-[#D4896A] text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8A088] focus:ring-offset-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}