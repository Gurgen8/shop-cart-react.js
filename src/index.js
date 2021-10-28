import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals.jsx';
import  "./assets/styles/style.css" 
import './assets/styles/font-awesome.css';
import "./assets/styles/media/mx_1170.css"
import "./assets/styles/media/mx_767.css"
import "./assets/styles/media/mx_374.css"
import "./assets/styles/media/mx_992.css"
import App from "./App.jsx"





ReactDOM.render(
  <React.StrictMode>
 <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
