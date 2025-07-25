// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     server: {
//       proxy: {
//         '/api': {
//           target: env.VITE_API_BASE_URL, 
//           changeOrigin: true,
//           secure: true,
//         },
//       },
//     },
//     plugins: [react()],
//   };
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
