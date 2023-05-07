import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonListPage from './Pages/PersonListPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PersonListPage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
