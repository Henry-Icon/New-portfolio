
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeContext'; // your dark/light provider
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

   <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
  
 
);
