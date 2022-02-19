import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Login from './Login';
import './Login.css'
=======

import { BrowserRouter as Router} from "react-router-dom";
import {Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import login from './Login'

>>>>>>> b938c3b390157c3fbfd2c073f334796f47b7f565
function App() {
  return (
  <div className="app">
    <Router>
        <Routes>
        <Route exact path="/" element={<login />} />
      </Routes>

    </Router>
  </div>
  );
}
export default App;
