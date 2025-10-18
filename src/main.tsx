import { createRoot } from "react-dom/client";
import React, { Component, type ReactNode } from "react";
import App from "./App.tsx";
import "./index.css";
import { initWebVitals } from "./lib/analytics";
import "./lib/performance"; // Initialize performance monitoring
import "./lib/accessibility"; // Initialize accessibility enhancements

// Initialize web vitals monitoring
initWebVitals();

class RootErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: unknown | null }> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }
  componentDidCatch(error: unknown, info: unknown) {
    console.error("RootErrorBoundary caught error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ padding: 16 }}>An error occurred. Check console logs.</div>;
    }
    return this.props.children;
  }
}

console.log("Main.tsx loaded");
const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (rootElement) {
  try {
    console.log("Creating root and rendering App");
    createRoot(rootElement).render(
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    );
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Error rendering app:", error);
  }
} else {
  console.error("Root element not found!");
}

