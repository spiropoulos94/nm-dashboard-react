import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({navStatus}) {

  return (
    <div>
      <div className={navStatus ? "navbar hidden" : "navbar"}>
        <div className="menu-items">
          <Link to="/colours" className="menu-item" onClick={navStatus}>
            Colours
          </Link>
          <Link to="/users" className="menu-item" onClick={navStatus}>
            Users
          </Link>
        </div>
        <footer className="footer">© 2020 Netmechanics</footer>
      </div>
    </div>
  ); 
}

export default NavBar;
