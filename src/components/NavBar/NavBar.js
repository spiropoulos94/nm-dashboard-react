import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar(props) {
  let hiddenNavBar = props.navStatus;
  // let setHiddenNavbar = props.setNavStatus

   //function resetLoadingState(){
   //  setIsLoading(true)
   //}

  return (
    <div>
      <div className={hiddenNavBar ? "navbar hidden" : "navbar"}>
        <div className="menu-items">
          <Link to="/colours" className="menu-item" onClick={props.closeNavbar}>
            Colours
          </Link>
          <Link to="/users" className="menu-item" onClick={props.closeNavbar}>
            Users
          </Link>
        </div>
        <footer className="footer">© 2020 Netmechanics</footer>
      </div>
    </div>
  );//
}

export default NavBar;
