import bancodadosFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

import Menu from "../components/Menu"


import Button from 'react-bootstrap/Button';


const Suv = () => {
  const [suvs, setSuvs] = useState([]);

  const getSuvs = async () => {
    try {
      const response = await bancodadosFetch.get("/suv");

      const data = response.data;

      setSuvs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSuvs();
  }, []);

  return (
    <div className="home">
      <Menu />
      <br />
      <br />

      <h1 className="casa">Veículos SUV</h1>
      {suvs.length === 0 ? (
        <p className = "aguarde">Carregando conteúdo. Por favor, aguarde...</p>
      ) : (
        suvs.map((suvs) => (

          <div className="post" key={suvs.id}>
            <div className="container">

              <h4 ><span>Veículo:</span> {suvs.marca} / {suvs.modelo}</h4>
              <h4 ><span>Infos adicionais: </span>{suvs.ano} / {suvs.cor}</h4><br />

              <Link className="btn-btn" to={`/NewPost`}>
                Inserir veículo
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );

};

export default Suv
