import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={`/`}>Garagem de veículos SENAC</Link>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/new`} className="new-btn">Adicionar</Link>
                </li>
                <li>
                    <Link to={`/edit`} className="new-btn">Editar</Link>
                </li>
            </ul>
        </nav>)
}

export default Navbar