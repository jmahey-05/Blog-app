import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const baseURL = import.meta.env.VITE_API_BASE_URL;

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: baseURL,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
