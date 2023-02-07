import bancodadosFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost2 = () => {
  const navigate = useNavigate();

  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [ano, setAno] = useState();
  const [cor, setCor] = useState();


  const createPost = async (e) => {
    e.preventDefault();

    const post = { marca, modelo, ano, cor };

    await bancodadosFetch.post("/hatch", {
      marca, modelo, ano, cor
    })

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo veículo:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Marca do veículo</label>
          <input
            placeholder="Digite a marca"
            onChange={(e) => setMarca(e.target.value)}
          />

          <label htmlFor="title">Modelo do veículo:</label>
          <textarea

            placeholder="Digite o modelo."
            onChange={(e) => setModelo(e.target.value)}
          ></textarea>

          <label htmlFor="title">Ano de fabricação:</label>
          <textarea
            placeholder="Digite o ano."
            onChange={(e) => setAno(e.target.value)}
          ></textarea>

          <label htmlFor="title">Cor do veículo:</label>
          <textarea

            placeholder="Digite a cor"
            onChange={(e) => setCor(e.target.value)}
          ></textarea>

        </div>
        <input type="submit" value="Inserir Post" className="btn-btn" />
      </form>
    </div>
  );
};

export default NewPost2;

