import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin3 = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = 
      await bancodadosFetch.get("/andar3")
      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    await bancodadosFetch.delete(`/andar3/${id}`);
    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="admin">
      <h1>Gerenciar veículos</h1>
      {posts.length === 0 ? (
        <p className="aguarde">Carregando o conteúdo da página. Por favor, aguarde...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2 className="infosapi"><span>Marca do veículo:</span> {post.marca}</h2>
            <h2 className="infosapi"><span>Modelo do veículo:</span> {post.modelo}</h2>
            <h2 className="infosapi"><span>Cor do veículo:</span> {post.cor}</h2>
            <h2 className="infosapi"><span>Placa do veículo:</span> {post.placa}</h2>
            <h2 className="infosapi"><span>Cliente:</span> {post.dono}</h2>
            <h2 className="infosapi"><span>Contato cliente:</span> {post.telefone}</h2>

            <div className="actions">
              <Link className="btn edit-btn" to={`/posts3/edit/${post.id}`}>
                Editar
              </Link>
              <button
                className="btn delete-btn"
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
              </div>
            </div>
        ))
      )}
    </div>
  );
};

export default Admin3;
