import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

/* (alternate code)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello World</h1>
    <App />
  </React.StrictMode>
); 
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <Card greeting={'Hello React Ninja'}/>
);

reportWebVitals(); 
