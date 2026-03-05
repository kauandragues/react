import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './styles/theme.css';
import './styles/global.css';

// import  Legal  from './App' ----> se for sem default, é possivel dar qualquer nome aqui

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
