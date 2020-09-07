import React,{useState} from "react";
import "./navbar.scss";

function NavBar() {

  let [hiddenNavBar, setHiddenNavBar] = useState(true)

  function hideNavbar(){

  }


  return (
    <div>
    <div className="navbar ">
      <div class="menu-items">
        <a href="#" className="menu-item">Colours</a>
        <a href="#" className="menu-item">Users</a>
      </div>
      <footer class="footer">© 2020 Netmechanics</footer>
    </div>
    <button onClick={()=>{console.log("click")}}>Show/Hide Navbar</button>
    </div>
  );
}

export default NavBar;
