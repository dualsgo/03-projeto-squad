import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [Home, setHome] = useState([]);
  const getHome = async () => {
    try {
      const data = response.data;

      setHome(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <div className="home">
      <div className="containerdiv">
        <Link className="" to={`/Admin`}>
          <div className="">
            <h2>Andar 1</h2>
          </div>
        </Link>
        <br />
        <Link className="" to={`/Admin2`}>
          <div className="">
            <h2>Andar 2</h2>
          </div>
        </Link>
        <br />
        <Link className="" to={`/Admin3`}>
          <div className="">
            <h2>Andar 3</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
