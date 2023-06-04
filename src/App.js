import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Busqueda from "./components/Busqueda";
import Formulario from "./components/Formulario";
import SobreNosotras from "./components/SobreNosotras";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/busqueda" element={<Busqueda/>} />
          <Route path="/sobreNosotras" element={<SobreNosotras/>}/>
          <Route path="/contacto" element={<Formulario/>} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
