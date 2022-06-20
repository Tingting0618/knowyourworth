import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/">Know Your Worth</Link>
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home </Link>
            </li>

            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/add_my_salary">Add My Salary </Link>
            </li> */}

            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/list">default</Link>
            </li> */}
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/login">Login</Link>
            </li> */}


        </ul>
    )
}
