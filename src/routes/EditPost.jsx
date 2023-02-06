import bancodadosFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [marca, setTipo] = useState();
  const [quarto, setQuarto] = useState();
  const [suite, setSuite] = useState();
  const [tamanho, setTamanho] = useState();
  const [imagem, setImagem] = useState();

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await bancodadosFetch.get(`/Casas/${id}`);

      const data = response.data;

      console.log(data);

      setTipo(data.marca);
      setQuarto(data.quarto);
      setSuite(data.suite)
      setTamanho(data.tamanho)
      setImagem(data.imagem)
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (e) => {
    e.preventDefault();

    const post = { marca, quarto, suite, tamanho, imagem, };

    await bancodadosFetch.put(`/Casas/${id}`, {
      id: post,
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
          <label htmlFor="title">Tipo de Residência:</label>
          <input
            placeholder="Digite o marca de Residência..."
            onChange={(e) => setTipo(e.target.value)}
            value={marca || ""}
          />


          <label htmlFor="title">Quantidade de Quartos:</label>
          <textarea

            placeholder="Digite a quantidade de quartos..."
            onChange={(e) => setQuarto(e.target.value)}
            value={quarto || ""}
          ></textarea>

          <label htmlFor="title">Suites:</label>
          <textarea

            placeholder="A residência possui suíte?..."
            onChange={(e) => setSuite(e.target.value)}
            value={suite || ""}
          ></textarea>

          <label htmlFor="title">Tamanho por M²:</label>
          <textarea

            placeholder="Diga quantos M² a residência tem..."
            onChange={(e) => setTamanho(e.target.value)}
            value={tamanho || ""}
          ></textarea>

          <label htmlFor="title">Imagem:</label>
          <textarea
            placeholder="Faça o upload da imagem..."
            onChange={(e) => setImagem(e.target.value)}
            value={imagem || ""}
          ></textarea>
        </div>
        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;

