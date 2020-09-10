import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import NavBar from "./components/NavBar/NavBar.js";
import { Switch, Route } from "react-router-dom";
import ColourView from "./components/ColourView/ColourView.js";
import UsersView from "./components/UsersView/UsersView.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Spinner from "./components/Spinner/Spinner.js";

function App() {
  let [hiddenNavBar, setHiddenNavBar] = useState(false);
  // let [isLoading, setIsLoading] = useState(true)
  let [coloursIsLoading, setColoursIsLoading] = useState(true)
  let [usersIsLoading, setUsersIsLoading] = useState(true)

  function toggleNavbar() {
    setHiddenNavBar(!hiddenNavBar);
  }

  function closeNavbar() {
    if(window.innerWidth < 768){
      setHiddenNavBar(true);
    }
  }

  //stops scrolling when navbar is open
  hiddenNavBar 
    ? document.body.classList.remove('no-scroll')
    : document.body.classList.add('no-scroll');

  window.addEventListener("resize", () => {
    window.innerWidth > 768 && setHiddenNavBar(false);
    window.innerWidth < 768 && setHiddenNavBar(true);
  });
   
  return (
    <Router>
      <div className="App" >
        <Header closeNavbar={closeNavbar} toggleNavbar={toggleNavbar} />
        <div className="flex-wrapper-main">
          <NavBar navStatus={hiddenNavBar} setNavStatus={setHiddenNavBar} closeNavbar={closeNavbar} />
          <div className="data-wrapper">
            <Switch>
              <Route path="/home">
                <h2 className="view-title">Welcome</h2>
              </Route>
              <Route path="/colours">
                {coloursIsLoading ? <Spinner /> :<ColourView />}
              </Route>
              <Route path="/users">
               {usersIsLoading ? <Spinner /> :<UsersView />}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
