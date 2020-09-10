import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar(props) {
  let hiddenNavBar = props.navStatus;

  return (
    <div  >
      <div className={hiddenNavBar ? "navbar hidden" : "navbar"}>
        <div className="menu-items">
          <Link to="/colours" className="menu-item">
            Colours
          </Link>
          <Link to="/users" className="menu-item">
            Users
          </Link>
        </div>
        <footer className="footer">© 2020 Netmechanics</footer>
      </div>
    </div>
  );
}

export default NavBar;
