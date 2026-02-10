/**
 * Configuração do Vite com suporte a React e Tailwind CSS
 * Inclui configuração do Vitest para testes
 */
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // Plugin React com SWC para compilação rápida
    tailwindcss(), // Plugin Tailwind CSS v4
  ],
  // Configuração do Vitest
  test: {
    globals: true, // Habilita variáveis globais (describe, it, expect)
    environment: 'jsdom', // Ambiente de teste DOM
    setupFiles: ['./src/test/setup.ts'], // Arquivo de setup
  },
  // Otimizações de build
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
  },
})
