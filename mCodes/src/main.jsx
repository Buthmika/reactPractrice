import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseState from './components/UseState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UseState></UseState>
  </StrictMode>,
)
