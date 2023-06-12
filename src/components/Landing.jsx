import React from 'react';
import { Link } from 'react-router-dom';
import videoLluvia from '../assets/video-fondo-lluvia.mp4';
import videoNieve from '../assets/video-fondo-nieve.mp4';
import videoSol from '../assets/video-fondo-sol.mp4';
import '../css/landingpage.css';

const Landing = () => {
  return (
    <div className="containerlanding">
      <div className="video-container">
        <video className="video-background1" autoPlay muted loop>
          <source src={videoSol} type="video/mp4" />
        </video>
        <video className="video-background2" autoPlay muted loop>
          <source src={videoLluvia} type="video/mp4" />
        </video>
        <video className="video-background3" autoPlay muted loop>
          <source src={videoNieve} type="video/mp4" />
        </video>
      </div>
      <Link to="/inicio" className="image-caption">Que no te tome por sorpresa</Link>
    </div>
  );
};

export default Landing;
