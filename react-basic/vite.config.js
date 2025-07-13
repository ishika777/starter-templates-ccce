import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 3000, // Match this with your Docker EXPOSE and PortBindings
        strictPort: true, // Ensures it doesn't randomly use another port
    },
});
