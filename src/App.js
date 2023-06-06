import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./components/paginas/Inicio";
import Busqueda from "./components/paginas/Busqueda"
import Formulario from "./components/Formulario";
import Landing from "./components/Landing";
import SobreNosotras from "./components/SobreNosotras";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>} />
          <Route path="/Busqueda.js" element={<Busqueda />} />
          <Route path="/SobreNosotras.js" element={<SobreNosotras />} />
          <Route path="/Contacto.js" element={<Formulario />} />
        </Routes>
        <Navbar />
        <Formulario />
        <Landing />
        <SobreNosotras />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
