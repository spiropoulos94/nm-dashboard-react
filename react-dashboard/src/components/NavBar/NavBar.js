import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function NavBar(props) {
  let [hiddenNavBar, setHiddenNavBar] = useState(false);

  function hideNavbar() {
    setHiddenNavBar(!hiddenNavBar);
  }

  return (
    <div>
      <button onClick={hideNavbar}>Show/Hide Navbar</button>
      <div className={hiddenNavBar ? "navbar hidden" : "navbar"}>
        <div class="menu-items">
          <Link to="/#" className="menu-item">
            Colours
          </Link>
          <Link to="/#" className="menu-item">
            Users
          </Link>
        </div>
        <footer class="footer">© 2020 Netmechanics</footer>
      </div>
    </div>
  );
  
}

export default NavBar;
