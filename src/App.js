import logo from './logo.svg';
import React, {Component} from 'react'
import { render } from 'react-dom';
import './App.css';
import {AllRoutes} from './Routes/routes'
function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
