import bancodadosFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import './Post.css'

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await bancodadosFetch.get(`/sedan/${id}`)
      await bancodadosFetch.get(`/hatch/${id}`);
      await bancodadosFetch.get(`/suv/${id}`);


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
        <p>Carregando conteúdo. Por favor, aguarde...</p>
      ) : (
        <div className="post">
            <h2>{post.marca}</h2>
            <h2>{post.modelo}</h2>
            <h2>{post.ano}</h2>
            <h2>{post.cor}</h2>
        </div>
      )}
    </div>
  );
};

export default Post;
