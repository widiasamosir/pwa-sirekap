// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import "@fontsource/nunito-sans"; // Defaults to weight 400
import "@fontsource/nunito-sans/400.css"; // Specify weight
import "@fontsource/nunito-sans/400-italic.css"; // Specify weight and style
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
