import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

AOS.init();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);