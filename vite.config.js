import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Alias for the source folder
    },
  },
  base: '/', // Set base path to '/' for root-level deployment
  build: {
    outDir: 'dist', // Make sure the build output is placed in 'dist'
  },
});
