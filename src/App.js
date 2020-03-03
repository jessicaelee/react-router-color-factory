import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Nav from "./Nav"
import Routes from "./Routes"
import Colors from "./Colors"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
        <Colors />
      </BrowserRouter>
    </div>
  );
}

export default App;
