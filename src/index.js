import React from 'react';
import ReactDOM from 'react-dom'; // Correct import
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './context/ContextShare';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextShare>
          <App />
      </ContextShare>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
