import { useMutation } from '@tanstack/react-query';

export function useNewsletterSubscribe() {
  return useMutation({
    mutationFn: async ({ email, name }) => {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to subscribe to newsletter');
      }

      return response.json();
    },
    retry: 1,
  });
}