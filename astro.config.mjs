import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ZeroGravityClone.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});