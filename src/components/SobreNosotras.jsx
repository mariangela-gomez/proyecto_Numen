import React from "react";
import '../css/sobrenosotras.css';


function SobreNosotras(){
    return(
        <div className="contenedor-sobrenosotras">
        <img className="foto-sobrenosotras" 
        src={require ("../assets/video-fondo.mp4")} 
        alt= "foto de estaciones"/> 
        <div className="contenedor-descripcion">
          <p className="descripcion-titulo"> Buen tiempo, Buen Clima </p>
          <p className="descripcion-subtitulo">Que no te tome por sorpresa</p>
          <p className="descripcion-completa">¡Hola amigos! Les damos la bienvenida a nuestra página del clima. Te invitamos a descubrir las últimas actualizaciones y consultar sobre los pronósticos del lugar donde te encuentres en cualquier parte del mundo. ¿Quisieras saber qué atuendo usar dependiendo del clima?
  Ingresando tu ubicación, te brindaremos los pronósticos más precisos, en tiempo real y confiables  que te ayudarán a planificar tus actividades diarias. Nuestro objetivo es brindarte información clara y concisa sobre el clima en tu localidad, para que estés preparado ante cualquier situación y te permita saber si necesitas llevarte un paraguas o planificar una merienda en el parque con amigos. Nuestra página te ofrece una interfaz rápida y sencilla de usar. Si tienes alguna pregunta, no dudes en contactarnos. Nuestro equipo especializado en clima, estará atento para ayudarte. ¡Sal y explora el mundo a tu manera!  Gracias por visitarnos.</p>
        </div>
      </div>   
    );
}
export default SobreNosotras; 