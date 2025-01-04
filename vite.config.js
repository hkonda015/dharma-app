import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Aliases '@' to the src folder
    },
  },
  base: '/', // Adjust this if deploying to a subpath
  build: {
    outDir: 'dist', // Default build output directory
    sourcemap: true, // Enable sourcemaps for easier debugging
  },
});
