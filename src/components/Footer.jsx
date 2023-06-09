import React from 'react'
import {Link} from 'react-router-dom'
import '../css/footer.css'

const Footer = () =>{
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
                     <Link to ='/clima' className='text-reset'>Clima</Link> 
                </li>
                <li>
                     <Link to ='/nosotras' className='text-reset'>Sobre Nosotras</Link> 
                </li>

                <li>
                     <Link to ='/contacto' className='text-reset'>Contacto</Link> 
                </li>     
                </ul>
                
            </div>
            
            <div class="boxf">
                <h3>Proyecto Clima</h3>
               <p>Este proyecto fue diseñado y desarrollado por el grupo 1 de Mujeres Conectadas para la Academia Numen. La tecnologías utilizada fue  React.</p>
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
 export default Footer;