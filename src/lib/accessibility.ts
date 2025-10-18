// Accessibility utilities and checks
export class AccessibilityChecker {
  private static instance: AccessibilityChecker;
  private issues: string[] = [];

  static getInstance(): AccessibilityChecker {
    if (!AccessibilityChecker.instance) {
      AccessibilityChecker.instance = new AccessibilityChecker();
    }
    return AccessibilityChecker.instance;
  }

  // Check for common accessibility issues
  checkAccessibility(): void {
    if (typeof document === 'undefined') return;

    this.issues = [];

    // Check for images without alt text
    this.checkImages();
    
    // Check for proper heading structure
    this.checkHeadings();
    
    // Check for keyboard navigation
    this.checkKeyboardNavigation();
    
    // Check for color contrast (basic check)
    this.checkColorContrast();
    
    // Check for ARIA labels
    this.checkAriaLabels();

    // Log issues in development
    if (process.env.NODE_ENV === 'development' && this.issues.length > 0) {
      console.warn('Accessibility Issues Found:', this.issues);
    }
  }

  private checkImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-hidden')) {
        this.issues.push(`Image ${index + 1} missing alt text`);
      }
    });
  }

  private checkHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.substring(1));
      
      if (index === 0 && level !== 1) {
        this.issues.push('First heading should be h1');
      }
      
      if (level > lastLevel + 1) {
        this.issues.push(`Heading level skipped: ${heading.tagName} after h${lastLevel}`);
      }
      
      lastLevel = level;
    });
  }

  private checkKeyboardNavigation(): void {
    const interactiveElements = document.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    interactiveElements.forEach((element, index) => {
      if (element.getAttribute('tabindex') === '-1' && 
          !element.getAttribute('aria-hidden')) {
        this.issues.push(`Interactive element ${index + 1} removed from tab order without aria-hidden`);
      }
    });
  }

  private checkColorContrast(): void {
    // Basic check for color contrast by looking for common problematic patterns
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Check for gray on gray (common accessibility issue)
      if (color.includes('gray') && backgroundColor.includes('gray')) {
        this.issues.push('Potential low contrast: gray text on gray background');
      }
    });
  }

  private checkAriaLabels(): void {
    // Check buttons without accessible names
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim() && 
          !button.getAttribute('aria-label') && 
          !button.getAttribute('aria-labelledby')) {
        this.issues.push(`Button ${index + 1} missing accessible name`);
      }
    });

    // Check form inputs without labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      if (input.getAttribute('type') !== 'hidden' &&
          !input.getAttribute('aria-label') &&
          !input.getAttribute('aria-labelledby') &&
          !document.querySelector(`label[for="${input.id}"]`)) {
        this.issues.push(`Form input ${index + 1} missing label`);
      }
    });
  }

  // Get all found issues
  getIssues(): string[] {
    return [...this.issues];
  }

  // Add focus indicators for keyboard navigation
  static enhanceFocusIndicators(): void {
    if (typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      /* Enhanced focus indicators */
      *:focus-visible {
        outline: 2px solid #007acc !important;
        outline-offset: 2px !important;
        border-radius: 2px !important;
      }
      
      /* Skip links */
      .skip-link:focus {
        position: fixed !important;
        top: 16px !important;
        left: 16px !important;
        z-index: 9999 !important;
        padding: 16px !important;
        background: #007acc !important;
        color: white !important;
        text-decoration: none !important;
        border-radius: 4px !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Add keyboard navigation helpers
  static addKeyboardHelpers(): void {
    if (typeof document === 'undefined') return;

    // Escape key handler for modals/dropdowns
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Close any open modals or dropdowns
        const openElements = document.querySelectorAll('[aria-expanded="true"]');
        openElements.forEach((element) => {
          element.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // Focus trap for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (modal) {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    });
  }
}

// Initialize accessibility enhancements
if (typeof window !== 'undefined') {
  AccessibilityChecker.enhanceFocusIndicators();
  AccessibilityChecker.addKeyboardHelpers();
  
  // Run accessibility check after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      AccessibilityChecker.getInstance().checkAccessibility();
    }, 1000);
  });
}