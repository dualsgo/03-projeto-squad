import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
      Garagem de carros - SENAC Irajá
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Sedan</Link>
        </li>
        <li>
          <Link to={`/hatch`}>Hatch</Link>
        </li>
        <li>
          <Link to={`/suv`} >SUV</Link>
        </li>
        <li>
          <Link to={`/admin`}>Gerenciar Sedan</Link>
        </li>
        <li>
          <Link to={`/admin2`}>Gerenciar Hatch</Link>
        </li>
        <li>
          <Link to={`/admin3`}>Gerenciar SUV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
