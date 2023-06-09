import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// eslint-disable-next-line no-unused-vars
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
import Landing from "./components/Landing";
import SobreNosotras from "./components/SobreNosotras";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/clima" element={<Clima/>} />
          <Route path="/sobreNosotras" element={<SobreNosotras/>}/>
          <Route path="/contacto" element={<Formulario/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
