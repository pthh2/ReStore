
import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './app/context/StoreContext';


export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router history={history}>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

