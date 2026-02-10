/**
 * Ponto de entrada da aplicação React
 * Configura o roteamento e renderiza o componente principal
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import App from './App.tsx'

// Renderiza a aplicação no elemento root do HTML
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
