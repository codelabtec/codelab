import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Main from '../pages/Home/Main.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import SmoothScrollProvider from '../components/SmoothScrollProvider/SmoothScrollProvider.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Router>
      <SmoothScrollProvider>
       <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
       </Routes>
      </SmoothScrollProvider>
      </Router>
    
  </StrictMode>,
)
