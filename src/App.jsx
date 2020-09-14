import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import ColourViewContainer from "./components/ColourView/ColourViewContainer";
import UsersViewContainer from "./components/UsersView/UsersViewContainer";
// import ColourView from "./components/ColourView/ColourView.js";
// import UsersView from "./components/UsersView/UsersView.js";
// import WithSpinner from "./components/WithSpinner/WithSpinner";
// let ColoursWithSpinner = WithSpinner(ColourView);
// let UsersWithSpinner = WithSpinner(UsersView);

function App() {
  let [hiddenNavBar, setHiddenNavBar] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  let [colours, setColours] = useState(null);
  let [users, setUsers] = useState(null);

  let url = {
    colors:"colors.json",      //"https://reqres.in/api/products/",
    users: "users.json"      //"https://reqres.in/api/users/",
  };

  //TODO RETURN isLoading TO STATE OF TRUE WHEN NAVIGATING BACK TO HOME PAGE ???

  function toggleNavbar(param) {
    if (window.innerWidth < 768) {
      switch (param) {
        case "hide":
          return setHiddenNavBar(true);
        default:
          return setHiddenNavBar(!hiddenNavBar);
      }
    }
  }

  //stops scrolling when navbar is open
  hiddenNavBar
    ? document.body.classList.remove("no-scroll")
    : document.body.classList.add("no-scroll");

  window.addEventListener("resize", () => {
    window.innerWidth >= 768 && setHiddenNavBar(false);
    window.innerWidth < 768 && setHiddenNavBar(true);
  });

  return (
    <Router>
      <div className="App">
        <Header toggleNavbar={toggleNavbar} />
        <div className="flex-wrapper-main">
          <NavBar
            navStatus={hiddenNavBar}
            setNavStatus={setHiddenNavBar}
            toggleNavbar={toggleNavbar}
          />
          <div className="data-wrapper">
            <Switch>
              <Route path="/colours">
                <ColourViewContainer
                  colours={colours}
                  setColours={setColours}
                  url={url.colors}
                  setIsLoading={setIsLoading}
                ></ColourViewContainer>
              </Route>
              <Route path="/users">
                <UsersViewContainer
                  users={users}
                  setUsers={setUsers}
                  url={url.users}
                  setIsLoading={setIsLoading}
                ></UsersViewContainer>
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
