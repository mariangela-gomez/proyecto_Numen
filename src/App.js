import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./components/paginas/Inicio";
import Busqueda from "./components/paginas/Busqueda";
import SobreNosotras from "./components/paginas/SobreNosotras";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path= '/' element = {<Inicio></Inicio>}/>
          <Route path= '/Busqueda.js' element = {<Busqueda/>}/>
          <Route path= '/SobreNosotras.js' element = {<SobreNosotras/>}/>
          <Route path= '/Contacto.js' element = {<Formulario/>}/>
        </Routes>
        <Navbar/>
        <Formulario/>
      </Router>
      <h1>Weather app</h1>
      
    </div>
  );
}

export default App;
