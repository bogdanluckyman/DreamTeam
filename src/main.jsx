import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { GlobalStyle } from './styles/GlobalStyled.js';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/DreamTeam">
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
