import bancodadosFetch from "../axios/config";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [cor, setCor] = useState();
  const [placa, setPlaca] = useState();
  const [dono, setDono] = useState();
  const [telefone, setTelefone] = useState();
  const createPost = async (e) => {
    e.preventDefault();
    const post = { marca, modelo, cor, placa, dono, telefone };
    await bancodadosFetch.post("/andar1", {
      marca, modelo, cor, placa, dono, telefone
    })

    navigate("/Andar1");
  };

  return (
    <div className="new-post">
      <h2> ➕ Inserir novo veículo:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">🚗 Marca do veículo:</label>
          <input type="text" className="inputcadastro"
            placeholder="Digite a marca"
            onChange={(e) => setMarca(e.target.value)} required
          />

          <label htmlFor="title"> Modelo do veículo:</label>
          <input type="text" className="inputcadastro"

            placeholder="Digite o modelo."
            onChange={(e) => setModelo(e.target.value)} required
          ></input>

          <label htmlFor="title"> Cor do veículo:</label>
          <input type="text" className="inputcadastro"

            placeholder="Digite a cor"
            onChange={(e) => setCor(e.target.value)} required
          ></input>

          <label htmlFor="title"> Placa:</label>
          <input type="text" className="inputcadastro"
            placeholder="Digite a placa no padrão AAA1234 ou AAA1A23."
            onChange={(e) => setPlaca(e.target.value)} required
          ></input>

          <label htmlFor="title"> Nome do cliente:</label>
          <input type="text" className="inputcadastro"

            placeholder="Digite o nome do cliente."
            onChange={(e) => setDono(e.target.value)} required
          ></input>

          <label htmlFor="title"> Telefone:</label>
          <input type="tel" className="inputcadastro"
            placeholder="Digite o telefone no padrão 21 987654321"
            onChange={(e) => setTelefone(e.target.value)} required
          ></input>

        </div>
        <input type="submit" value="Cadastrar 💾" className="btn-btn edit-btn" />
      </form>
    </div>
  );
};

export default NewPost;

