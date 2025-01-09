import React from "react";
import "./Home.css";
import profileImg from "../assets/portafolio.png"; 
const Home = () => {
  return (
    <div className="home">
      <div className="profile">
      <img src={profileImg} alt="Profile" />
      </div>
      <div className="info">
        <h1>Hola, soy Agustín Gómez</h1>
        <p>Desarrollador Web </p>
      </div>
    </div>
  );
};

export default Home;