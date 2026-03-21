// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { remarkPlantuml } from './src/plugins/remark-plantuml.mjs';
import { remarkMermaid } from './src/plugins/remark-mermaid.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.leonardespi.me',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkPlantuml, remarkMermaid],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // Image optimization settings
  image: {
    // Use sharp for image processing (already installed)
    remotePatterns: [],
  },
});
