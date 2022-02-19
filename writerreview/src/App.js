import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from 'react';
import './Login.js'
function App() {
  return (
  <div className="app">
    <Router>
        <Route exact path="/" component={Login} />
    </Router>
  </div>
  );
}
export default App;
