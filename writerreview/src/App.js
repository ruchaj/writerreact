import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Login from './Login';
import './Login.css'
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
