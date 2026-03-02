// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beckwourthpeakhighcamp.com',
  integrations: [sitemap()],
  image: {
    domains: ['beckwourthpeakhighcamp.com'],
  },
});
