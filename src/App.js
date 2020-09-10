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

  function toggleNavbar() {
    setHiddenNavBar(!hiddenNavBar);
  }

  function closeNavbar() {
    setHiddenNavBar(true);
  }


  //stops scrolling when navbar is open
   if (hiddenNavBar === false) {
     document.body.classList.add('no-scroll');
   } else {
     document.body.classList.remove('no-scroll');
   }

   //todo improvement.
  function normalizeNavbar() {
    if (window.innerWidth > 576) {
      setHiddenNavBar(false);
    } else setHiddenNavBar(true);
  }

  window.addEventListener("resize", normalizeNavbar);

   onkeydown=clearSessionStorage;

   function clearSessionStorage(e){
    if(e.keyCode === 90 && e.ctrlKey){
      console.log("data cleared")
     sessionStorage.clear();
     window.location.reload()
    }
   }
   
  return (
    <Router>
      <div className="App" >
        <Header closeNavbar={closeNavbar} toggleNavbar={toggleNavbar} />
        <div className="flex-wrapper-main">
          <NavBar navStatus={hiddenNavBar} setNavStatus={setHiddenNavBar} />
          <div className="data-wrapper">
            <Switch>
              <Route path="/home">
                {<h2 className="view-title">Welcome</h2> ? (
                  <h2 className="view-title">Welcome</h2>
                ) : (
                  <Spinner />
                )}
              </Route>
              <Route path="/colours">
                <ColourView />
              </Route>
              <Route path="/users">
               <UsersView />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
