import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import 'tachyons';

/* 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1> Hello World </h1>
    <App />
  </React.StrictMode>
); 
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <Hello greeting={'Hello ' + 'React Ninja'}/> 
);

reportWebVitals(); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

