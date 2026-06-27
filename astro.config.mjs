import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ZeroGravityClone.github.io',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets' // Esto cambia la carpeta '_astro' por 'assets', saltándose el bloqueo de GitHub Pages
  }
});