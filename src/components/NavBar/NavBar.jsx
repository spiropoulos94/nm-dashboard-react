import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({hiddenNavBar, updateNavBar}) {

  let navbar = document.querySelector(".navbar")
  console.log(navbar)

  navbar && navbar.addEventListener('transitionend', (e)=>{
    if(navbar.classList.contains(" hidden")){
      navbar.style.display ="none";
    }
    else{
      navbar.style.display="flex";
    }

  })


  return (
    <div>
      <div className={hiddenNavBar ? "navbar hidden" : "navbar"}>
        <div className="menu-items">
          <Link to="/colours" className="menu-item" onClick={() => updateNavBar(true)}>
            Colours
          </Link>
          <Link to="/users" className="menu-item" onClick={() => updateNavBar(true)}>
            Users
          </Link>
        </div>
        <footer className="footer">© 2020 Netmechanics</footer>
      </div>
    </div>
  ); 
}

export default NavBar;
