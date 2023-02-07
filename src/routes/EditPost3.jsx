import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [ano, setAno] = useState();
  const [cor, setCor] = useState();
  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = 
        await bancodadosFetch.get(`/suv/${id}`);


      const data = response.data;

      console.log(data);

      setMarca(data.marca);
      setModelo(data.modelo);
      setAno(data.ano)
      setCor(data.cor)
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (e) => {
    e.preventDefault();

    const post = { marca, modelo, ano, cor, };

    await bancodadosFetch.put(`/suv/${id}`, {
      marca, modelo, ano, cor
    });

    navigate("/");
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="new-post">
      <h2>Editando: {marca}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Marca: </label>
          <input
            placeholder="Digite a marca"
            onChange={(e) => setMarca(e.target.value)}
            value={marca || ""}
          />


          <label htmlFor="title">Quantidade de Quartos:</label>
          <textarea

            placeholder="Digite o modelo"
            onChange={(e) => setModelo(e.target.value)}
            value={modelo || ""}
          ></textarea>

          <label htmlFor="title">Ano:</label>
          <textarea

            placeholder="Digite o ano"
            onChange={(e) => setAno(e.target.value)}
            value={ano || ""}
          ></textarea>

          <label htmlFor="title">Cor:</label>
          <textarea

            placeholder="Digite a cor"
            onChange={(e) => setCor(e.target.value)}
            value={cor || ""}
          ></textarea>

        </div>
        <input type="submit" value="Confirmar edições" className="botaoeditar" />
      </form>
    </div>
  );
};

export default NewPost;

