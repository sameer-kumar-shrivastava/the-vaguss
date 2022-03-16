import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar-component/navbar.component';
import App from './App';
import SigninPage from './pages/signin-page/signin-page';




ReactDOM.render(
  <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

