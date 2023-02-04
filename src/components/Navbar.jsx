import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={`/`}>Titulo</Link>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>

                </li>
                <li>
                    <Link to={`/new`} className="new-btn">Novo post</Link>

                </li>
            </ul>
        </nav>)
}

export default Navbar