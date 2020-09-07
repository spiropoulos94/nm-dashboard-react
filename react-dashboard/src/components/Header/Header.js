import React from "react";
import "./header.scss";
import LogoPlaceholder from "../../images/logoplaceholder.png";
import Avatar from "../../images/accountPhoto.png";

function Header(props) {
  console.log(props)
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <button className="burger-btn">
          <span className="menu-icon">&#9776;</span>
        </button>
        <img className="header-logo" src={LogoPlaceholder} alt="logo" />
        <span className="logo-txt">LOGO</span>
      </div>

      <span className="title">Dashboard</span>
      <button onClick={props.hideNavBar}>Show/Hide Navbar</button> 
      <div className="header-right">
        <span className="logout-txt">LOGOUT</span>
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Header;
