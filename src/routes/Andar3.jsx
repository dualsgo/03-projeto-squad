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
          <div >➕</div><br />
          <div className="txtBtn">Cadastrar</div>
        </Link>
        <Link className="btn-btn" to={`/Admin3`}>
          <div>👀</div><br />
          <div className="txtBtn">Visualizar</div>
        </Link>
        <br /><br />
      </div>
      <h1 className="titulo">🏬 Veículos no terceiro piso 🏬</h1>

      {andar3.length === 0 ? (
        <p className="aguarde">⌛ Carregando o conteúdo da página. Por favor, aguarde...</p>
      ) : (
        andar3.map((andar3) => (

          <div className="postRota" key={andar3.id}>
            <div className="containerCadastros">
              <div className="containerdiv">
                <img src="https://cdn-icons-png.flaticon.com/512/708/708980.png" className="imgCar" />
              </div>
              <h4 className="infosapi">Veículo cadastrado com sucesso na vaga {andar3.id}</h4>
              <h4 className="infosapi"><span>Veículo:</span><br />🚗 {andar3.marca} / 🚗 {andar3.modelo}</h4>
              <h4 className="infosapi"><span>Infos adicionais: </span><br />🎨 {andar3.cor} / 🚗 {andar3.placa}</h4>
              <h4 className="infosapi"><span>Dados de contato: </span><br />👤 {andar3.dono} / 📱 {andar3.telefone}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );

};

export default Andar3
