/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/pages': resolve(__dirname, './src/pages'),
      '@/styles': resolve(__dirname, './src/styles'),
      '@/lib': resolve(__dirname, './src/lib'),
      '@/assets': resolve(__dirname, './src/assets'),
      '@/routes': resolve(__dirname, './src/routes'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/constants': resolve(__dirname, './src/constants'),
      '@/services': resolve(__dirname, './src/services'),
      '@/types': resolve(__dirname, './src/types'),
      '@/helpers': resolve(__dirname, './src/helpers'),
      '@/stores': resolve(__dirname, './src/stores'),
    },
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.ts'],
  },
});
