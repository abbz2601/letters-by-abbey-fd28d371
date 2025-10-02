export default function LoadingSpinner({ size = 'md', color = 'primary' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-[#E8A088]',
    secondary: 'text-[#8B6F47]',
    muted: 'text-[#A08B7A]'
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className={`animate-spin rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}
        aria-label="Loading"
      />
    </div>
  );
}