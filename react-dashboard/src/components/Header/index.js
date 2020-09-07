import React from 'react'
import style from "./header.module.scss"
import logoPlaceholder from "../../../src/images/logo-placeholder"

function Header() {
    return (
        <div>
            <div>
                <img></img>
                <span>LOGO</span>
            </div>
            <h1>Dashboard</h1>
            <div>
                <span>LOGOUT</span>
                <img src={logoPlaceholder} />
            </div>
        </div>
    )
}

export default Header
