/* import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        Garagem de carros - SENAC Irajá
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Lista: Sedans</Link>
        </li>
        <li>
          <Link to={`/admin`}>Gerenciar: Sedans</Link>
        </li>
        <li>
          <Link to={`/hatch`}>Lista: Hatchs</Link>
        </li>
        <li>
          <Link to={`/admin2`}>Gerenciar: Hatchs</Link>
        </li>
        <li>
          <Link to={`/suv`} >Lista: SUVs</Link>
        </li>
        <li>
          <Link to={`/admin3`}>Gerenciar: SUVs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
 */

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {

  return (

      <nav class="menu">
        <ul>
          <li>Painel administrativo</li>
          <li>
            <a href="#">Cadastros</a>
            <ul>
              <li><Link to={`/`}>Lista: Sedans</Link></li>
              <li><Link to={`/hatch`}>Lista: Hatchs</Link></li>
              <li><Link to={`/suv`} >Lista: SUVs</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">Editor</a>
            <ul>
              <li><Link to={`/admin`}>Gerenciar: Sedans</Link></li>
              <li><Link to={`/admin2`}>Gerenciar: Hatchs</Link></li>
              <li><Link to={`/admin3`} >Gerenciar: SUVs</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      );
};


      export default Navbar;