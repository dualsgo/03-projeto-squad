import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

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
      <Link className="btn-btn" to={`/NewPost`}>
        Cadastrar veículo
      </Link>
      <h1 className="casa">Veículos SEDAN</h1>

      {sedans.length === 0 ? (
        <p className="aguarde">Carregando conteúdo. Por favor, aguarde...</p>
      ) : (
        sedans.map((sedans) => (

          <div className="post" key={sedans.id}>
            <div className="container">
              <h4 ><span>Veículo:</span> {sedans.marca} / {sedans.modelo}</h4>
              <h4 ><span>Infos adicionais: </span>{sedans.ano} / {sedans.cor}</h4><br />
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
