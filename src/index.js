import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginStatusProvider } from './components/LoginStatusContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginStatusProvider>
    <App />
    </LoginStatusProvider>
  </React.StrictMode>
);

reportWebVitals();
