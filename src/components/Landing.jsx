import React from "react";
import { Link } from "react-router-dom";
import "../css/landingpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import videoLluvia from "../assets/video-fondo-lluvia.mp4";
import img1 from "../assets/img1.png";
import img3 from "../assets/img3.png";

const Landing = () => {
  return (
    <div className="containerlanding">
      <div className="video-container">
        <video className="video-background2" autoPlay muted loop>
          <source src={videoLluvia} type="video/mp4" />
        </video>
        <img src={img1} alt="Imagen1" />
        <img src={img3} alt="Imagen3" />
      </div>
      <Link to="/inicio" className="image-caption">
        <span className="caption-text">Que no te tome por sorpresa</span>
        <FontAwesomeIcon icon={faMousePointer} className="caption-icon" />
      </Link>
    </div>
  );
};

export default Landing;
