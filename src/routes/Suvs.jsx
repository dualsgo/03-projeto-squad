import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

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
      <div className="containerdiv">
        <Link className="btn-btn" to={`/NewPost3`}>
          Cadastrar veículo
        </Link>   <Link className="btn-btn" to={`/Admin3`}>
          Visualizar cadastros
        </Link>
        <br /><br />
      </div>
      <h1 className="titulo">Tipo de veículo: SUV</h1>

      {suvs.length === 0 ? (
        <p className="aguarde">Carregando o conteúdo da página. Por favor, aguarde...</p>
      ) : (
        suvs.map((suvs) => (

          <div className="post" key={suvs.id}>
            <div className="container">
              <h4 className="infosapi"><span>Veículo:</span> {suvs.marca} / {suvs.modelo}</h4>
              <h4 className="infosapi"><span>Infos adicionais: </span>{suvs.ano} / {suvs.cor}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );

};

export default Suv
