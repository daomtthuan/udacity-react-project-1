import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '~components': path.resolve(__dirname, './src/components'),
      '~hooks': path.resolve(__dirname, './src/hooks'),
      '~plugins': path.resolve(__dirname, './src/plugins'),
      '~services': path.resolve(__dirname, './src/services'),
      '~styles': path.resolve(__dirname, './src/styles'),
      '~types': path.resolve(__dirname, './src/types'),
    },
  },
});
