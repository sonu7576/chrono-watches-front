import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Contextshare from './modules/users/pages/Contextshare';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>

    <Contextshare>
      <App />
      </Contextshare>
    
    </BrowserRouter>
  
  </React.StrictMode>
);


