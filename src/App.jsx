import React, {useState} from "react";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import {Switch, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.scss";
import ColourViewContainer from "./components/ColourView/ColourViewContainer";
import UsersViewContainer from "./components/UsersView/UsersViewContainer";

function App() {
    let [hiddenNavBar, setHiddenNavBar] = useState(window.innerWidth < 768);
    let [isLoading, setIsLoading] = useState(true);
    let [colours, setColours] = useState(null);
    let [users, setUsers] = useState(null);

    let url = {
        colors: "colors.json", //"https://reqres.in/api/products/",
        users: "users.json", //"https://reqres.in/api/users/",
    };

    //todo css in css
    document.body.style.overflow = !hiddenNavBar ? "hidden" : ""


    function updateNavBar(value) {
        if (window.innerWidth >= 768) return;
        setHiddenNavBar(value);
    }

    function updateNavBarOnResize() {
        setHiddenNavBar(window.innerWidth < 768);
    }

    window.addEventListener("resize", updateNavBarOnResize);

    return (
        <Router>
            <div  className="App">
                <Header
                    updateNavBar={updateNavBar}
                    hiddenNavBar={hiddenNavBar}/>

                <div className="flex-wrapper-main">
                    <NavBar
                        hiddenNavBar={hiddenNavBar}
                        updateNavBar={updateNavBar}
                    />
                    <div className="data-wrapper">
                        <Switch>
                            <Route path="/colours">
                                <ColourViewContainer
                                    colours={colours}
                                    setColours={setColours}
                                    url={url.colors}
                                    setIsLoading={setIsLoading}/>
                            </Route>
                            <Route path="/users">
                                <UsersViewContainer
                                    users={users}
                                    setUsers={setUsers}
                                    url={url.users}
                                    setIsLoading={setIsLoading}/>
                            </Route>
                            <Route path="/">
                                <div className="view-wrapper">
                                    <h2  className="view-title">Welcome</h2>
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
