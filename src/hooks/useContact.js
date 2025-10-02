import { useMutation } from '@tanstack/react-query';

export function useContactForm() {
  return useMutation({
    mutationFn: async ({ name, email, subject, message }) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send contact message');
      }

      return response.json();
    },
    retry: 1,
  });
}