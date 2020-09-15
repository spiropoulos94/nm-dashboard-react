import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({hiddenNavBar, toggleNavbar}) {

  return (
    <div>
      <div className={hiddenNavBar ? "navbar hidden" : "navbar"}>
        <div className="menu-items">
          <Link to="/colours" className="menu-item" onClick={toggleNavbar}>
            Colours
          </Link>
          <Link to="/users" className="menu-item" onClick={toggleNavbar}>
            Users
          </Link>
        </div>
        <footer className="footer">© 2020 Netmechanics</footer>
      </div>
    </div>
  ); 
}

export default NavBar;
