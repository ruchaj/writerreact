import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Login from './Login';
import './Login.css'
function App() {
  return (
  <div className="app">
    <Router>
        <Routes>
        <Route exact path="/" element={Login} />
      </Routes>

    </Router>
  </div>
  );
}
export default App;
