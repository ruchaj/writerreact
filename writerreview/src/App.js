import './App.css';

import { BrowserRouter as Router} from "react-router-dom";
import {Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import login from './Login'

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
