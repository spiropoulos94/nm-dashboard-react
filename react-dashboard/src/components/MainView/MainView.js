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
            <h2 className="heading">Welcome</h2>
        </div>
    )
}

export default MainView
