/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_SHOPIFY_DOMAIN?: string;
  readonly NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN?: string;
  readonly DATABASE_URL?: string;
  readonly AUTH_SECRET?: string;
  readonly AUTH_URL?: string;
  readonly RESEND_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
