// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Pages proje sitesi: https://<kullanıcı>.github.io/<repo>/
// Repo adını veya kullanıcı adını değiştirirsen bu iki değeri güncelle.
// Özel alan adı (custom domain) kullanırsan: site: 'https://alanadin.com', base: '/'
export default defineConfig({
  site: 'https://f4tih66.github.io',
  base: '/websitem',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Varsayılan koyu tema; açık tema CSS değişkenleri ile uygulanır (global.css).
      themes: {
        dark: 'github-dark-dimmed',
        light: 'github-light',
      },
      defaultColor: 'dark',
      wrap: false,
    },
  },
});
