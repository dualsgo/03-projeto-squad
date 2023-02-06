import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import { Link } from "react-router-dom";

import './Home.css'

const Home = () => {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {

    try {
      const response = await blogFetch.get("/garagem")
      const data = response.data
      setPosts(data)

    } catch (error) {
      console.log(error)
    }

  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Registro de veículos</h1>

      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => (

          <div className="post" key={post.id}>

            <h2>{post.carro}</h2>

            <p>{post.placa}</p>
            <p>{post.telefone}</p>
            
          </div>
        ))
      )}
    </div>
  );
};

export default Home