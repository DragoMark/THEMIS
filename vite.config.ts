import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE_PATH || (command == 'build' ? '/themis/' : '/'),
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: './postcss.config.js'
  },
  server: {
    port: 3000
  },
  // resolve: {
  //   alias: {
  //     '/vite.svg': require.resolve('./src/assets/vite.svg')
  //   }
  // }
}));
