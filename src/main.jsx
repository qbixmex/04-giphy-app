import React from 'react';
import ReactDOM from 'react-dom/client';
import GiphyApp from './GiphyApp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiphyApp />
  </React.StrictMode>
);
