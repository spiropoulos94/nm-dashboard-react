import React from "react";
import "./header.scss";
import LogoPlaceholder from "../../images/logoplaceholder.png";
import Avatar from "../../images/accountPhoto.png";

function Header(props) {
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <button className="burger-btn" onClick={props.hideNavbar}>
          <span className="menu-icon">&#9776;</span>
        </button>
        <img className="header-logo" src={LogoPlaceholder} alt="logo" />
        <span className="logo-txt">LOGO</span>
      </div>
      <span className="title">Dashboard</span>
      <div className="header-right">
        <span className="logout-txt">LOGOUT</span>
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Header;
