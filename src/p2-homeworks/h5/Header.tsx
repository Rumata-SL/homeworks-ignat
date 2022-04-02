import React from "react"
import {NavLink} from "react-router-dom"
import h from "./Header.module.css"

function Header() {
    return (
        <div className={h.wrapperHeader}>
            {/*<div className={h.containerButton}>*/}
            {/*    <button>hover my</button>*/}
            {/*</div>*/}
            <div>
            <ul className={h.menu}>
                <li className={h.current}><a href="#">nav</a></li>
            </ul>

            </div>

            <div className={h.containerNav}>

                <ul className={h.menu}>
                    <li><NavLink className={h.current} to={"/pre-junior"}>Pre_Junior</NavLink></li>
                    <li><NavLink to={"/junior"}>Junior</NavLink></li>
                    <li><NavLink to={"/junior-plus"}>Junior_Plus</NavLink></li>
                </ul>
            </div>

            {/*// add NavLinks*/}
        </div>
    )
}

export default Header
