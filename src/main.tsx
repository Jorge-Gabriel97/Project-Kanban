import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes' // Importação do componente adicionada
import App from './App.tsx'
import "@radix-ui/themes/styles.css"
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme appearance="dark"> 
      <App />
    </Theme>
  </StrictMode>,
)