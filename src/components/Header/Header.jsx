import React from "react";
import "./Header.scss";
import LogoPlaceholder from "../../images/logoplaceholder.png";
import Avatar from "../../images/accountPhoto.png";
import {Link} from "react-router-dom";

//todo DESTRUCTURE PROPS
function Header({updateNavBar, hiddenNavBar}) {

    return (
        <div className="header-wrapper">
            <div className="header-left">
                <button className="burger-btn" onClick={() => {updateNavBar(!hiddenNavBar)}}>
                    <span className="menu-icon">&#9776;</span>
                </button>
                <Link to="/" className="link" onClick={() => updateNavBar(true)}>
                    <img className="header-logo" src={LogoPlaceholder} alt="logo"/>
                    <span className="logo-txt">LOGO</span>
                </Link>
            </div>
            <span className="title">Dashboard</span>
            <div className="header-right">
                <span className="logout-txt">LOGOUT</span>
                <img src={Avatar} alt="avatar"/>
            </div>
        </div>
    );
}

export default Header;
