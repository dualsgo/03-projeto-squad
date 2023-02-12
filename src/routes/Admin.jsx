import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    try {
      const response =
        await bancodadosFetch.get("/andar1");
      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    await bancodadosFetch.delete(`/andar1/${id}`);
    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="admin">
      <h1>⚙️ Gerenciar veículos</h1>
      {posts.length === 0 ? (
        <p className="aguarde">⌛ Carregando o conteúdo da página. Por favor, aguarde...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2 className="infosapi"><span>🚗 Vaga:</span> {post.id}</h2>
            <h2 className="infosapi"><span>🚗 Marca do veículo:</span><br />{post.marca}</h2>
            <h2 className="infosapi"><span>🚗 Modelo do veículo:</span><br />{post.modelo}</h2>
            <h2 className="infosapi"><span>🎨 Cor do veículo:</span><br />{post.cor}</h2>
            <h2 className="infosapi"><span>🚗 Placa do veículo:</span><br />{post.placa}</h2>
            <h2 className="infosapi"><span>👤 Cliente:</span><br />{post.dono}</h2>
            <h2 className="infosapi"><span>📱 Contato cliente:</span><br />{post.telefone}</h2>
            <div className="actions">
              <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>
                💾 Editar
              </Link>
              <button
                className="btn delete-btn"
                onClick={() => deletePost(post.id)}
              >
                🗑️ Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
