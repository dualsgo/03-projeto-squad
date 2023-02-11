import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Andar2 = () => {
  const [andar2, setAndar2] = useState([]);
  const getAndar2 = async () => {
    try {
      const response = await bancodadosFetch.get("/andar2");
      const data = response.data;

      setAndar2(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAndar2();
  }, []);

  return (
    <div className="home">
      <div className="containerdiv">
        <Link className="btn-btn" to={`/NewPost2`}>
          Cadastrar veículo
        </Link>   <Link className="btn-btn" to={`/Admin2`}>
          Visualizar cadastros
        </Link>
        <br /><br />
      </div>
      <h1 className="titulo">Veículos no segundo piso</h1>
      {andar2.length === 0 ? (
        <p className="aguarde">Carregando o conteúdo. Por favor, aguarde...</p>
      ) : (
        andar2.map((andar2) => (
          <div className="post" key={andar2.id}>
            <div className="container">
              <div className="containerdiv">
                <img src="https://cdn-icons-png.flaticon.com/512/3069/3069647.png" className="imgCar" />
              </div>
              <h4 className="infosapi">Veículo cadastrado com sucesso na vaga {andar2.id}</h4>
              <h4 className="infosapi"><span>Veículo:</span> {andar2.marca} / {andar2.modelo}</h4>
              <h4 className="infosapi"><span>Infos adicionais: </span>{andar2.cor} / {andar2.placa}</h4>
              <h4 className="infosapi"><span>Dados de contato: </span>{andar2.dono} / {andar2.telefone}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default Andar2
