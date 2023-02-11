import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Andar3 = () => {
  const [andar3, setAndar3] = useState([]);
  const getAndar3 = async () => {
    try {
      const response = await bancodadosFetch.get("/andar3");
      const data = response.data;

      setAndar3(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAndar3();
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
      <h1 className="titulo">Veículos no primeiro piso</h1>

      {andar3.length === 0 ? (
        <p className="aguarde">Carregando o conteúdo da página. Por favor, aguarde...</p>
      ) : (
        andar3.map((andar3) => (

          <div className="post" key={andar3.id}>
            <div className="container">
              <h4 className="infosapi"><span>Veículo:</span> {andar3.marca} / {andar3.modelo}</h4>
              <h4 className="infosapi"><span>Infos adicionais: </span>{andar3.cor} / {andar3.placa}</h4>
              <h4 className="infosapi"><span>Dados de contato: </span>{andar3.dono} / {andar3.telefone}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );

};

export default Andar3
