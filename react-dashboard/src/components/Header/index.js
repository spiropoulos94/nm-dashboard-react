import React from 'react'
import style from "./header.module.scss"
import LogoPlaceholder from "../../images/logoplaceholder.png"
import Avatar from "../../images/accountPhoto.png"

function Header() {
    return (
        <div className={style["header-wrapper"]}>
            <div className={style["header-left"]}>
                <img className={style["header-logo"]} src={LogoPlaceholder} alt="logo" />
                <span>LOGO</span>
            </div>
            <h2>Dashboard</h2>
            <div className={style["header-right"]}>
                <span>LOGOUT</span>
                <img src={Avatar} />
            </div>
        </div>
    )
}

export default Header
