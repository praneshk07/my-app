// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import Alert from './components/Alert';
import React from 'react';
// import { Routes ,Route } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
export default function App() {
  return (
   <>
  {/* <Router> */}
  <Navbar title="Text-Anal" aboutText="About Us"/> 
  {/* <Alert/> */}
  <div className="container my-3">
  {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/">
          

          </Route>
        </Switch>
  <About/> */}
  < TextForm heading="Enter text to analyse"/>
  
  </div>
  {/* </Router> */}
   </>
  );
}


