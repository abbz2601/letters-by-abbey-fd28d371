import 'react-router';

// Node.js globals
declare const process: {
  env: {
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
    DATABASE_URL?: string;
    AUTH_SECRET?: string;
    AUTH_URL?: string;
    NEXT_PUBLIC_API_URL?: string;
    NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN?: string;
    NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN?: string;
    NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
    CONVERTKIT_API_KEY?: string;
    CONVERTKIT_FORM_ID?: string;
  };
};

module 'virtual:load-fonts.jsx' {
	export function LoadFonts(): null;
}

declare module 'react-router' {
	interface AppLoadContext {
		// add context properties here
	}
}

declare module 'npm:stripe' {
	import Stripe from 'stripe';
	export default Stripe;
}

declare module '@auth/create/react' {
	import { SessionProvider } from '@auth/react';
	export { SessionProvider };
}
