import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [Home, setHome] = useState([]);
  const getHome = async () => {
    try {
      const data = response.data;

      setHome(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
<div class="cardsHome">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>01</h2>
        <h3>Primeiro andar</h3>
        <p>Veículos estacionados nas vagas do primeiro andar</p>
        <Link className="btn-btn" to={`/Andar1`}>Visualizar</Link>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>Segundo andar</h3>
        <p>Veículos estacionados nas vagas do segundo andar</p>
        <Link className="btn-btn" to={`/Andar2`}>Visualizar</Link>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Terceiro andar</h3>
        <p>Veículos estacionados nas vagas do terceiro andar</p>
        <Link className="btn-btn" to={`/Andar3`}>Visualizar</Link>
      </div>
    </div>
  </div>
</div>
  );
};

export default Home;
