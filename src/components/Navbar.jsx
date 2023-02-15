

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {

  return (

    <nav className="menu">
      <p className="logo"><Link to={`/`}>🚙 Garagem de carros Senac 🚗</Link></p>
      <ul>
        <li>
          <a href="#">✏️ Cadastros</a>
          <ul>
            <li><Link to={`/andar1`}>👀 Visualizar: Piso 1</Link></li>
            <li><Link to={`/andar2`}>👀 Visualizar: Piso 2</Link></li>
            <li><Link to={`/andar3`} >👀 Visualizar: Piso 3</Link></li>
          </ul>
        </li>
        <li>
          <a href="#">⚙️ Painel </a>
          <ul>
            <li><Link to={`/admin`}>👨‍💻 Gerenciar: Piso 1</Link></li>
            <li><Link to={`/admin2`}>👨‍💻 Gerenciar: Piso 2</Link></li>
            <li><Link to={`/admin3`} >👨‍💻 Gerenciar: Piso 3</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;