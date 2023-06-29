// import {defineConfig} from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // src: path.resolve(__dirname, './src'),
      src: path.resolve('/home/ashleyubuntu/wailsReactDevian/frontend/src'),
    },
  },
  // server: {
  //   port: 8085,
  // },
});