import React, { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <h1 className="font-playfair-display text-5xl md:text-6xl text-foreground mb-4">
              Something went <span className="italic">wrong</span>
            </h1>
            <p className="font-crimson-text text-lg text-muted-foreground mb-8">
              We're sorry, but something unexpected happened. Please try refreshing the page or return home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-all duration-200"
              >
                Return Home
              </Link>
            </div>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-8 text-left bg-muted p-4">
                <summary className="font-crimson-text text-sm cursor-pointer">
                  Error Details (Dev Only)
                </summary>
                <pre className="mt-4 text-xs overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
