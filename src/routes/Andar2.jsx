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
          <div >➕</div><br />
          <div className="txtBtn">Cadastrar</div>
        </Link>
        <Link className="btn-btn" to={`/Admin2`}>
          <div>👀</div><br />
          <div className="txtBtn">Visualizar</div>
        </Link>
        <br /><br />
      </div>
      <h1 className="titulo">🏬 Veículos no segundo piso 🏬</h1>

      {andar2.length === 0 ? (
        <div class="loading">
        <h2>Carregando conteúdo</h2>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
              </div>) : (
        andar2.map((andar2) => (

          <div className="postRota" key={andar2.id}>
            <div className="containerCadastros">
              <div className="containerdiv">
                <img src="https://cdn-icons-png.flaticon.com/512/708/708980.png" className="imgCar" />
              </div>
              <h4 className="infosapi">Veículo cadastrado com sucesso na vaga {andar2.id}</h4>
              <h4 className="infosapi"><span>Veículo:</span><br /> {andar2.marca} /  {andar2.modelo}</h4>
              <h4 className="infosapi"><span>Infos adicionais: </span><br /> {andar2.cor} /  {andar2.placa}</h4>
              <h4 className="infosapi"><span> Contato: </span><br /> {andar2.dono} /  {andar2.telefone}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );

};

export default Andar2
