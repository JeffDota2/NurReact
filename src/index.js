import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './componentes/contacto.js';
import Nanvar from './componentes/nanvar.js';
import Carrousel from './componentes/carrousel.js';
import Nur from './componentes/nur.js';
import Soporte from './componentes/soporte';
import Linea from './componentes/linea';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Nanvar/>
    <Carrousel/>
    <Nur/>
    <Soporte/>
    <Linea/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
