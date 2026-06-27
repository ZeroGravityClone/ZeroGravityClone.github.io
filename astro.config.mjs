import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ZeroGravityClone.github.io',
  integrations: [tailwind()],
  output: 'static' // Forzamos compilación estática para GitHub Pages
});