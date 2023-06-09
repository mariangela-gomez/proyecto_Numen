import React from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css";
 
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a href="NavBar">
            <img className="logo" 
            src={require ("../assets/logo.png")} 
            alt= "foto de estaciones"
            />
            <img 
            src=""
            /*src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"*/
            alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link anclas" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anclas" to="/Busqueda">
                  Busqueda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anclas" to="/SobreNosotras">
                  Sobre Nosotras
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anclas" to="/Contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;