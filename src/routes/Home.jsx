import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Admin from "./Admin";

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
      <div className="containerdiv">
        <Link className="btn-btn" to={`/NewPost`}>
          Cadastrar veículo
        </Link>   <Link className="btn-btn" to={`/Admin`}>
          Visualizar cadastros
        </Link>
        <br /><br />
      </div>
      <h1 className="titulo">Tipo de veículo: SEDAN</h1>

      {sedans.length === 0 ? (
        <p className="aguarde">Carregando conteúdo. Por favor, aguarde...</p>
      ) : (
        sedans.map((sedans) => (

          <div className="post" key={sedans.id}>
            <div className="container">
              <h4 className="infosapi"><span>Veículo:</span> {sedans.marca} / {sedans.modelo}</h4>
              <h4 className="infosapi"><span>Infos adicionais: </span>{sedans.ano} / {sedans.cor}</h4><br />
              {/*               <Link className="btn-btn" to={`/NewPost`}>
                Cadastrar veículo
              </Link> */}
            </div>
          </div>
        ))
      )}
    </div>
  );

};

export default Home
