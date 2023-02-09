import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <div className="containerdiv">
        <Link className="btn-btn" to={`/NewPost2`}>
          Cadastrar veículo
        </Link>   <Link className="btn-btn" to={`/Admin2`}>
          Visualizar cadastros
        </Link>
        <br /><br />
      </div>
      <h1 className="titulo">Tipo de veículo: HATCH</h1>
      {hatch.length === 0 ? (
        <p className="aguarde">Carregando o conteúdo. Por favor, aguarde...</p>
      ) : (
        hatch.map((hatch) => (
          <div className="post" key={hatch.id}>
            <div className="container">
              <h4 className="infosapi"><span>Veículo:</span> {hatch.marca} / {hatch.modelo}</h4>
              <h4 className="infosapi"><span>Infos adicionais: </span>{hatch.ano} / {hatch.cor}</h4><br />
              {/*               <Link className="btn-btn" to={`/NewPost2`}>
                Cadastrar veículo
              </Link> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default Hatch
