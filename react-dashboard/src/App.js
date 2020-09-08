import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.js";
import NavBar from "./components/NavBar/NavBar.js";

import { BrowserRouter as Router } from "react-router-dom";
import MainView from "./components/MainView/MainView.js";
import "./App.scss"

function App() {
  let [hiddenNavBar, setHiddenNavBar] = useState(false);

  function hideNavbar() {
    setHiddenNavBar(!hiddenNavBar);
  }

  function normalizeNavbar() {
    if (window.innerWidth > 576) {
      setHiddenNavBar(false);
    } else setHiddenNavBar(true);
  }

  window.addEventListener("resize", normalizeNavbar);

  return (
    <Router>
      <div className="App">
        <Header hideNavbar={hideNavbar} />
<<<<<<< HEAD
        <div className="flex-wrapper-main">
        <NavBar navStatus={hiddenNavBar}  />
=======
        <NavBar navStatus={hiddenNavBar} />
>>>>>>> parent of 33ffc64... adding colour components
        <MainView/>
        </div>
      </div>
    </Router>
  );
}

export default App;
