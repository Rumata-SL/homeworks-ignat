import React from "react"
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <div>
            <div>
                <button>+</button>
            </div>

            <ul>
                <li><NavLink to={"/pre-junior"}>PreJunior</NavLink></li>
                <li><NavLink to={"/junior"}>Junior</NavLink></li>
                <li><NavLink to={"/junior-plus"}>JuniorPlus</NavLink></li>
            </ul>


            {/*// add NavLinks*/}
        </div>
    )
}

export default Header
