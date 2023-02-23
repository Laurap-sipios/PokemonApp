import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Switch } from "react-router-dom";
import {DetailPage} from './components/DetailPage';
import { Routes , Route } from "react-router-dom";

const Routing = () => {
  return(
    <Router>
      
      <Routes>

        <Route exact path='/' 
              element={<App/>} />

        <Route path='/detail-page/:id' 
              element={<DetailPage/>} />

      </Routes>
      
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


