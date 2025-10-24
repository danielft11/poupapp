import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // aqui você define a porta. A porta 5173 é a porta padrão, então se não tivesse essa sessão configurada, já executaria nessa porta.
    open: true // abre automaticamente o navegador
  }
})
