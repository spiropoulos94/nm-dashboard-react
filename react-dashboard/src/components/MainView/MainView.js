import React from 'react'
import "./mainview.scss"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function MainView() {
    return (
        <div className="main-view-wrapper">
        <Switch>
          <Route path="/home">
                <h2>Welcome</h2>
                </Route>
          <Route path="/users">
              <h2>Users Screen</h2>
          </Route>
          <Route path="/colours">
              <h2>Colours Screen</h2>
          </Route>
        </Switch>
    </div>
    )
}

export default MainView;
