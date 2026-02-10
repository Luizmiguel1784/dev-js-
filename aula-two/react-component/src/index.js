import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header/Index';
import"./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

