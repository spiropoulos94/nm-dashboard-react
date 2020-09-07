import React from "react";
import "./header.scss";
import LogoPlaceholder from "../../images/logoplaceholder.png";
import Avatar from "../../images/accountPhoto.png";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <img className="header-logo" src={LogoPlaceholder} alt="logo" />
        <span>LOGO</span>
        <button className="burger-btn">
        <span className="menu-icon" >&#9776;</span>
      </button>
      </div>
      
      <span className="title">Dashboard</span>
      <div className="header-right">
        <span>LOGOUT</span>
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Header;
