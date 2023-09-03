import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';

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
  <CardList robots={robots}/>
);

reportWebVitals(); 
