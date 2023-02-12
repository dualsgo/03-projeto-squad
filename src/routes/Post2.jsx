import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Post.css'

const Post2 = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const getPost = async () => {
    try {
      const response = await bancodadosFetch.get(`/andar2/${id}`)
      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.marca ? (
        <p>⌛ Carregando o conteúdo da página. Por favor, aguarde...</p>
      ) : (
        <div className="post">
            <h2>Veículo: 🚗 {post.marca} - 🚗 {post.modelo}</h2>
            <h2>🎨 {post.cor} - 🚗 {post.placa}</h2>
            <h2>👤 {post.dono} - 📱 {post.telefone}</h2>
        </div>
      )}
    </div>
  );
};

export default Post2;
