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
  let [hiddenNavBar, setHiddenNavBar] = useState(window.innerWidth < 768);
  let [isLoading, setIsLoading] = useState(true);
  let [colours, setColours] = useState(null);
  let [users, setUsers] = useState(null);

  let url = {
    colors: "colors.json", //"https://reqres.in/api/products/",
    users: "users.json", //"https://reqres.in/api/users/",
  };

  //TODO RETURN isLoading TO STATE OF TRUE WHEN NAVIGATING BACK TO HOME PAGE ???

  // function toggleNavbar(param) {
  //   if (window.innerWidth < 768) {
  //     switch (param) {
  //       case "hide":
  //         return setHiddenNavBar(true);
  //       default:
  //         return setHiddenNavBar(!hiddenNavBar);
  //     }
  //   }
  // }

  function toggleNavbar(){
    setHiddenNavBar(!hiddenNavBar)
  }


  function closeNavBar(){
    console.log('close navbar()')
    if(window.innerWidth < 768 ){
      setHiddenNavBar(true)
    }
  }

  function adaptNavBar(){
    if(window.innerWidth >=768){
      setHiddenNavBar(false)
    }else{
      setHiddenNavBar(true)
    }
  }

  window.addEventListener('resize', adaptNavBar)

  //window.addEventListener("resize", () => {
  //  if(window.innerWidth >=768){
  //    setHiddenNavBar(false)
  //  }
  //  else {
  //    setHiddenNavBar(true)
  //  }
  //});

  return (
    <Router>
      <div className="App">
        <Header  toggleNavbar={toggleNavbar} closeNavBar={closeNavBar} />
        <div className="flex-wrapper-main">
          <NavBar
            hiddenNavBar={hiddenNavBar}
            toggleNavbar={toggleNavbar}
            closeNavBar={closeNavBar}
            
          />
          <div className="data-wrapper">
            <Switch>
              <Route path="/colours">
                <ColourViewContainer
                  colours={colours}
                  setColours={setColours}
                  url={url.colors}
                  setIsLoading={setIsLoading}
                />
              </Route>
              <Route path="/users">
                <UsersViewContainer
                  users={users}
                  setUsers={setUsers}
                  url={url.users}
                  setIsLoading={setIsLoading}
                />
              </Route>
              <Route path="/">
                <div className="view-wrapper">
                  <h2 className="view-title">Welcome</h2>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
