import React, {useState} from "react";
import Header from "./components/Header/Header.js";
import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {


  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
