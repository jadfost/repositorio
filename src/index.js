import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PersonList from './PersonList'; // 

ReactDOM.render(
    <React.StrictMode>
      <PersonList />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
reportWebVitals();
