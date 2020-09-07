import React from "react";
import "./navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <div class="menu-items">
        <a href="#" className="menu-item">Colours</a>
        <a href="#" className="menu-item">Users</a>
      </div>
      <footer class="footer">© 2020 Netmechanics</footer>
    </div>
  );
}

export default NavBar;
