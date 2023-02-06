import bancodadosFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";


import Menu from "../components/Menu"

import "./Home.css";



//Hatch//
const Hatch = () => {
  const [hatch, setHatch] = useState([]);

  const getHatch = async () => {
    try {
      const response = await bancodadosFetch.get("/hatch");

      const data = response.data;

      setHatch(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHatch();
  }, []);

  return (
    <div className="home">
      <Menu />
      <br />
      <br />
      <h1 className="casa">Veículos HATCH</h1>
      {hatch.length === 0 ? (
        <p className="aguarde">Carregando o conteúdo. Por favor, aguarde...</p>
      ) : (
        hatch.map((hatch) => (
          <div className="post" key={hatch.id}>
            <div className="container">
              <h4 ><span>Veículo:</span> {hatch.marca} / {hatch.modelo}</h4>
              <h4 ><span>Infos adicionais: </span>{hatch.ano} / {hatch.cor}</h4><br />
              <Link className="btn-btn" to={`/NewPost`}>
                Inserir Post
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default Hatch
