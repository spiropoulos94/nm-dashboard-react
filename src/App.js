import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import NavBar from "./components/NavBar/NavBar.js";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import ColourContainer from "./components/ColourView/ColourContainer";
import UsersContainer from "./components/UsersView/UserContainer";
// import ColourView from "./components/ColourView/ColourView.js";
// import UsersView from "./components/UsersView/UsersView.js";
// import WithSpinner from "./components/WithSpinner/WithSpinner";
// let ColoursWithSpinner = WithSpinner(ColourView);
// let UsersWithSpinner = WithSpinner(UsersView);

function App() {
  let [hiddenNavBar, setHiddenNavBar] = useState(false);
  let [isLoading, setIsLoading] = useState(true);

  let url = {
    colors: "https://reqres.in/api/products/",
    users: "https://reqres.in/api/users/",
  };

  //TODO RETURN isLoading TO STATE OF TRUE WHEN NAVIGATING BACK TO HOME PAGE ???

  function toggleNavbar() {
    setHiddenNavBar(!hiddenNavBar);
  }

  function closeNavbar() {
    if (window.innerWidth < 768) {
      setHiddenNavBar(true);
    }
  }

  //stops scrolling when navbar is open
  hiddenNavBar
    ? document.body.classList.remove("no-scroll")
    : document.body.classList.add("no-scroll");

  window.addEventListener("resize", () => {
    window.innerWidth > 768 && setHiddenNavBar(false);
    window.innerWidth < 768 && setHiddenNavBar(true);
  });

  return (
    <Router>
      <div className="App">
        <Header closeNavbar={closeNavbar} toggleNavbar={toggleNavbar} />
        <div className="flex-wrapper-main">
          <NavBar
            navStatus={hiddenNavBar}
            setNavStatus={setHiddenNavBar}
            closeNavbar={closeNavbar}
          />
          <div className="data-wrapper">
            <Switch>
              <Route path="/colours">
                <ColourContainer
                  url={url.colors}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                >
                  {/* inside here lives the colourViewContainer */}
                </ColourContainer>
              </Route>
              <Route path="/users">
                <UsersContainer
                  url={url.users}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                ></UsersContainer>
              </Route>
              <Route path="/">
                <h2 className="view-title">Welcome</h2>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
