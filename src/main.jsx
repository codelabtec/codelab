import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Main from '../pages/Home/Main.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import SmoothScrollProvider from '../components/SmoothScrollProvider/SmoothScrollProvider.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';



createRoot(document.getElementById('root')).render(

  <SnackbarProvider>
  <StrictMode>
    <BrowserRouter> 
      <SmoothScrollProvider>
       <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contato' element={<Contact />} />
       </Routes>
      </SmoothScrollProvider>
      </BrowserRouter>
  </StrictMode>
  </SnackbarProvider>,
)
