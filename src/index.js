import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PaginaListaPersonas from './paginas/PaginaListaPersonas';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PaginaListaPersonas />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
