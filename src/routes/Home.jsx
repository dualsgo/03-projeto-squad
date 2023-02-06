import bancodadosFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

import Menu from "../components/Menu"


import Button from 'react-bootstrap/Button';


const Home = () => {
  const [sedans, setSedans] = useState([]);

  const getSedan = async () => {
    try {
      const response = await bancodadosFetch.get("/sedan");

      const data = response.data;

      setSedans(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSedan();
  }, []);

  return (
    <div className="home">
      <Menu />
      <br />
      <br />

      <h1 className="casa">Veículos SEDAN</h1>
      {sedans.length === 0 ? (
        <p>Carregando conteúdo. Por favor, aguarde...</p>
      ) : (
        sedans.map((sedans) => (

          <div className="post" key={sedans.id}>
            <div className="container">

              <h4 >{sedans.marca}</h4>
              <h4 >{sedans.modelo}</h4>
              <h4 >{sedans.ano}</h4>
              <h4 >{sedans.cor}</h4>

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

export default Home
