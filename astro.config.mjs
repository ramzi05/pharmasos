import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'ar', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  build: {
    format: 'directory'
  },
  vite: {
    ssr: {
      noExternal: ['astro:i18n']
    }
  }
});