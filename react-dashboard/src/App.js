import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import NavBar from "./components/NavBar/NavBar.js";
import { Switch, Route } from "react-router-dom";
import ColourView from "./components/ColourView/ColourView.js";
import UsersView from "./components/UsersView/UsersView.js";

import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

function App() {
  let [hiddenNavBar, setHiddenNavBar] = useState(false);

  function hideNavbar() {
    setHiddenNavBar(!hiddenNavBar);
  }
  //stops scrolling when navbar is open
  if(hiddenNavBar==false){
    document.body.style.overflow = "hidden"
  }else {
    document.body.style.overflow = ""
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
        <div className="flex-wrapper-main">
          <NavBar navStatus={hiddenNavBar} />
          <div className="data-wrapper">
            <Switch>
              <Route path="/home">
                <h2 className="view-title">Welcome</h2>
              </Route>
              <Route path="/users">
                <UsersView />
              </Route>
              <Route path="/colours">
                <ColourView />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
