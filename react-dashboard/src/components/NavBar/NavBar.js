import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function NavBar(props) {
  let hiddenNavBar = props.navStatus;

  return (
    <div>
      <div className={hiddenNavBar ? "navbar hidden" : "navbar"}>
        <div className="menu-items">
          <Link to="/#" className="menu-item">
            Colours
          </Link>
          <Link to="/#" className="menu-item">
            Users
          </Link>
        </div>
        <footer className="footer">© 2020 Netmechanics</footer>
      </div>
    </div>
  );
}

export default NavBar;
