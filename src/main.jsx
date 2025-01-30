import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from '../pages/Home/Main.jsx'
import SmoothScrollProvider from '../components/SmoothScrollProvider/SmoothScrollProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrollProvider>
      <Main />
    </SmoothScrollProvider>
  </StrictMode>,
)
