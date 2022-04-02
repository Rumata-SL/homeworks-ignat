import React from "react"
import {NavLink} from "react-router-dom"
import h from "./Header.module.css"

function Header() {
    return (
        <div className={h.wrapperHeader}>

            <div>
                <ul className={h.menu}>
                    <li className={h.current}><NavLink to={"/pre-junior"}>Hover me</NavLink></li>

                        <ul className={`${h.menu} ${h.submenu}`}>
                            <li><NavLink to={"/pre-junior"}>Pre_Junior</NavLink></li>
                            <li><NavLink to={"/junior"}>Junior</NavLink></li>
                            <li><NavLink to={"/junior-plus"}>Junior_Plus</NavLink></li>
                        </ul>
                </ul>

            </div>

            {/*// add NavLinks*/}
        </div>
    )
}

export default Header
