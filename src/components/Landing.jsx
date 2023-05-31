import React from 'react';
import videoSource from '../assets/video-fondo.mp4';
import imagerain from '../assets/img-lluvia-azul.png';
import '../css/landingpage.css'
<asset></asset>

const Landing = () => {
  return (
    <div className="container">
      <video className="video-background" autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
      </video>
      <img src={imagerain} alt="fondo" />
      <button className="image-caption">Que no te tome por sorpresa</button>
    </div>
  );
};

export default Landing;
