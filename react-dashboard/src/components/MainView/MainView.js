import React from "react";
import "./mainview.scss";
import { Switch, Route } from "react-router-dom";
import ColourView from "../ColourView/ColourView";

function MainView() {
  return (
    <div className="main-view-wrapper">
      <Switch>
        <Route path="/home">
          <h2 className="heading">Welcome</h2>
        </Route>
        <Route path="/users">
          <h2>Users </h2>
        </Route>
        <Route path="/colours">
          <h2>Colours </h2>
          <ColourView />
        </Route>
      </Switch>
    </div>
  );
}

export default MainView;
