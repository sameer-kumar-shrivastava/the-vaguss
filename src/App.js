import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard-page/dashboard-page.component';
import Navbar from './components/navbar-component/navbar.component';
import Footer from './components/footer-component/footer.component';
import SigninPage from './pages/signin-page/signin-page';
import SignupPage from './pages/signup-page/signup-page';

 

class App extends Component {



  render(props){
   
  return (
      <div className="App">
        <h1>props.loggedIn</h1>
        <Router>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/signin" element={<SigninPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
            </Routes>
          <Footer />
        </Router>     
      
      </div>
    );
}
}

export default App;
