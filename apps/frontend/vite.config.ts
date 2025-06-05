import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { join } from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: join(__dirname, '../../dist/apps/frontend'),
    emptyOutDir: true,
  },
});
