import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Uncomment this line when bulding for production -- needs to match browserRouter 'basename' path in 'main.jsx'
  // base: '/',
  plugins: [react()],
});
