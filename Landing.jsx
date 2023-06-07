import React, { useEffect } from 'react';
import videoLluvia from '../assets/video-fondo-lluvia.mp4';
import videoNieve from '../assets/video-fondo-nieve.mp4';
import videoSol from '../assets/video-fondo-sol.mp4';
import '../css/landingpage.css';

const Landing = () => {
  useEffect(() => {
    const adjustVideoSize = () => {
      const containerHeight = document.querySelector('.containerlanding').offsetHeight;
      const videoWrappers = document.querySelectorAll('.video-wrapper');
      videoWrappers.forEach(wrapper => {
        wrapper.style.height = `${containerHeight}px`;
      });
    };

    adjustVideoSize();
    window.addEventListener('resize', adjustVideoSize);
    return () => {
      window.removeEventListener('resize', adjustVideoSize);
    };
  }, []);

  return (
    <div className="containerlanding">
      <div className="video-container">
        <div className="video-wrapper">
          <video className="video-background1" autoPlay muted loop>
            <source src={videoSol} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video className="video-background2" autoPlay muted loop>
            <source src={videoLluvia} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video className="video-background3" autoPlay muted loop>
            <source src={videoNieve} type="video/mp4" />
          </video>
        </div>
      </div>
      <button className="image-caption">Que no te tome por sorpresa</button>
    </div>
  );
};

export default Landing;
