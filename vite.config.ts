import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts: [
      'ws-fff-eeefaca-jdrllezbws.cn-hongkong-vpc.fcapp.run',
      'localhost',
      '127.0.0.1'
    ],
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})