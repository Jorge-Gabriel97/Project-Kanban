import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O seu pode ter outras coisas, o importante é adicionar esse bloco "test"
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // <--- Liga o simulador de tela do navegador!
  }
})