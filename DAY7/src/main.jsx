import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import App1 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1></App1>
     {/* <Header />  */}
  </StrictMode>,
)
