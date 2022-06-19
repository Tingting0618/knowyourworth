import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Know Your Worth</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link" to="/login">Login</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link" to="/add_my_salary">add_my_salary </Link>
            </li>
        </ul>
    )
}
