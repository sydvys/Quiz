import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Contexts from './Components/Contexts/Contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Contexts>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Contexts>
);

