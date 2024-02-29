import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle } from './components/GlobalStyled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/bogdanluckyman/DreamTeam">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
