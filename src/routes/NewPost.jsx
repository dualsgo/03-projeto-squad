import bancodadosFetch from "../axios/config";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [ano, setAno] = useState();
  const [cor, setCor] = useState();
  const createPost = async (e) => {
    e.preventDefault();
    const post = { marca, modelo, ano, cor };
    await bancodadosFetch.post("/sedan", {
      marca, modelo, ano, cor
    })

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo veículo:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Marca do veículo:</label>
          <input type="text" className="inputcadastro"
            placeholder="Digite a marca"
            onChange={(e) => setMarca(e.target.value)} required
          />

          <label htmlFor="title">Modelo do veículo:</label>
          <input type="text" className="inputcadastro"

            placeholder="Digite o modelo."
            onChange={(e) => setModelo(e.target.value)} required
          ></input>

          <label htmlFor="title">Ano de fabricação:</label>
          <input type="number" className="inputcadastro"
            placeholder="Digite o ano."
            onChange={(e) => setAno(e.target.value)} required
          ></input>

          <label htmlFor="title">Cor do veículo:</label>
          <input type="text" className="inputcadastro"

            placeholder="Digite a cor"
            onChange={(e) => setCor(e.target.value)} required
          ></input>

        </div>
        <input type="submit" value="Cadastrar" className="btn-btn edit-btn" />
      </form>
    </div>
  );
};

export default NewPost;

