export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:font-crimson-text focus:text-lg focus:uppercase focus:tracking-wide focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-ring"
      aria-label="Skip to main content"
    >
      Skip to Content
    </a>
  );
}
