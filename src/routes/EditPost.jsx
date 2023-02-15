import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [cor, setCor] = useState();
  const [placa, setPlaca] = useState();
  const [dono, setDono] = useState();
  const [telefone, setTelefone] = useState();

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await bancodadosFetch.get(`/andar1/${id}`);
      const data = response.data;
      console.log(data);

      setMarca(data.marca);
      setModelo(data.modelo);
      setCor(data.cor);
      setPlaca(data.placa);
      setDono(data.dono);
      setTelefone(data.telefone);
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (e) => {
    e.preventDefault();
    const post = { marca, modelo, cor, placa, dono, telefone };
    await bancodadosFetch.put(`/andar1/${id}`, {
      marca,
      modelo,
      cor,
      placa,
      dono,
      telefone,
    });

    navigate("/Andar1");
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="new-post">
      <h2>
        Editando: {marca} {modelo}
      </h2>
      <h2>Cliente: {dono}</h2>

      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">🚗 Marca:</label>
          <input
            type="text"
            className="inputcadastro"
            placeholder="Digite a marca"
            onChange={(e) => setMarca(e.target.value)}
            value={marca || ""}
          />

          <label htmlFor="title">🚗 Modelo:</label>
          <input
            type="text"
            className="inputcadastro"
            placeholder="Digite o modelo"
            onChange={(e) => setModelo(e.target.value)}
            value={modelo || ""}
          ></input>

          <label htmlFor="title">🎨 Cor:</label>
          <input
            type="text"
            className="inputcadastro"
            placeholder="Digite a cor"
            onChange={(e) => setCor(e.target.value)}
            value={cor || ""}
          ></input>

          <label htmlFor="title">🚗 Placa:</label>
          <input
            type="text"
            className="inputcadastro"
            placeholder="Digite a placa no padrão AAA1234 ou AAA1A23"
            onChange={(e) => setPlaca(e.target.value)}
            value={placa || ""}
          ></input>

          <label htmlFor="title">👤 Dono(a):</label>
          <input
            type="text"
            className="inputcadastro"
            placeholder="Digite o nome do cliente"
            onChange={(e) => setDono(e.target.value)}
            value={dono || ""}
          ></input>

          <label htmlFor="title">📱 Telefone: </label>
          <input
            type="tel"
            className="inputcadastro"
            placeholder="Digite o telefone no padrão 21 987654321"
            onChange={(e) => setTelefone(e.target.value)}
            value={telefone || ""}
          ></input>
        </div>
        <input
          type="submit"
          value="Confirmar edições 💾"
          className="botaoEditar"
        />
      </form>
    </div>
  );
};

export default NewPost;
