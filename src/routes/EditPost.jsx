import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditPost.css"

const EditPost = () => {

  const navigate = useNavigate()
  const [carro, setCarro] = useState()
  const [placa, setPlaca] = useState()
  const [telefone, setTelefone] = useState()



  const createPost = async (e) => {
    e.preventDefault();

    const post = {
      carro,
      placa,
      telefone
    };

    await blogFetch.post(`/garagem/${id}`, {
      carro,
      placa,
      telefone
    });

    navigate("/");
  }

  return (
    <div className='new-post'>
      <h2>Editar Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
          <label htmlFor="carro">Carro: </label>
          <input type="text" name='carro' id='carro' placeholder='Digite o modelo do carro' onChange={(e) => setCarro(e.target.value)} />
        </div>

        <div className="form-control">
          <label htmlFor="placa">Placa: </label>
          <input type="text" name='placa' id='placa' placeholder='Digite a placa' onChange={(e) => setPlaca(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="placa">Telefone: </label>
          <input type="number" name='telefone' id='telefone' placeholder='Digite o telefone' onChange={(e) => setTelefone(e.target.value)} />
        </div>

        <input type="submit" value="Editar" className='btn' />

      </form>
    </div>
  )
}

export default EditPost
