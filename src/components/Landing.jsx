import React from "react";
import { Link } from "react-router-dom";
import "../css/landingpage.css";


const Landing = () => {
  return (
    <div className="containerlanding">
			 
      <p className="p-landing">Que no te tome por sorpresa</p> 
         <img className="icono-landing"src="https://www.lavoz.com.ar/images/weather/rain.svg" alt="Descripción de la imagen" /> 
     
      <Link to="/inicio" className="image-caption">
        <span className="caption-text">Bienvenidos</span>
      </Link>
    </div>
  );
};

export default Landing;
