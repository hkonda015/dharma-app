import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Correct alias for the source directory
    },
  },
  base: '/', // Ensure this is '/' for root-level deployment
  build: {
    outDir: 'dist', // Ensure build output is placed in dist/
  },
});
