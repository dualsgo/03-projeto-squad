import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Andar1 = () => {
  const [andar1, setAndar1] = useState([]);
  const getAndar1 = async () => {
    try {
      const response = await bancodadosFetch.get("/andar1");
      const data = response.data;

      setAndar1(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAndar1();
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
      <h1 className="titulo">Veículos no primeiro piso</h1>

      {andar1.length === 0 ? (
        <p className="aguarde">Carregando o conteúdo da página. Por favor, aguarde...</p>
      ) : (
        andar1.map((andar1) => (

          <div className="post" key={andar1.id}>
            <div className="container">
              <div className="containerdiv">
                <img src="https://cdn-icons-png.flaticon.com/512/3069/3069647.png" className="imgCar" />
              </div>
              <h4 className="infosapi">Veículo cadastrado com sucesso na vaga {andar1.id}</h4>
              <h4 className="infosapi"><span>Veículo:</span> {andar1.marca} / {andar1.modelo}</h4>
              <h4 className="infosapi"><span>Infos adicionais: </span>{andar1.cor} / {andar1.placa}</h4>
              <h4 className="infosapi"><span>Dados de contato: </span>{andar1.dono} / {andar1.telefone}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );

};

export default Andar1
