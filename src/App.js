import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard-page/dashboard-page.component';
import Navbar from './components/navbar-component/navbar.component';
import SigninPage from './pages/signin-page/signin-page';
import SignupPage from './pages/signup-page/signup-page';

 

class App extends Component {


  render(){
   
  return (
      <div className="App">
        <Router>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/signin" element={<SigninPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
            </Routes>
        </Router>     
      
      </div>
    );
}
}

export default App;
