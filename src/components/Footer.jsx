import React from 'react'
import { Link, useLocation } from "react-router-dom";
import '../css/footer.css'

const Footer = () => {
    const location = useLocation();
    const landingPage = location.pathname === '/';
  
    if (landingPage) {
      return null;
    } else {
	return (
		<footer>
        <div class="footer-container">
        <div class="boxf">
                <h3>Mapa del Sitio</h3>
                <ul>
                <li>
                     <Link to ='/inicio' className='text-reset'>Inicio</Link> 
                </li>
                
                <li>
                     <Link to ='/SobreNosotras' className='text-reset'>Sobre Nosotras</Link> 
                </li>

                <li>
                     <Link to ='/contacto' className='text-reset'>Contacto</Link> 
                </li>     
                </ul>
                
            </div>
            
            <div class="boxf">
                <h3>Proyecto Clima</h3>
               <p>Este proyecto fue desarrollado por el Grupo № 1 de Mujeres Conectadas para la Academia Numen. Hemos utilizado la tecnología de React en su diseño y desarrollo, aprovechando su potencial para crear una experiencia interactiva y dinámica.</p>
            </div>

            <div class="boxf">
                <h3>Redes Sociales</h3>
                <ul>
                    <li>
                        <Link to="https://es-la.facebook.com/"><i class="fab fa-facebook"></i> </Link>
                    </li>
                    <li>
                        <Link to="https://twitter.com/"><i class="fab fa-twitter"></i> </Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/?hl=en"><i class="fab fa-instagram"></i> </Link>
                    </li>
                </ul>
            </div>
            
        </div>
        {/* <hr /> */}
        <div class="site-info">
            <p>
                <i>2023. Todos los derechos reservados</i>
            </p>
        </div>
    </footer>
	);
}
}
 export default Footer;