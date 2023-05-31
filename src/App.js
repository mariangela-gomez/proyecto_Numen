import Formulario from "./components/Formulario";
import Landing from "./components/Landing";
import SobreNosotras from "./components/SobreNosotras"; 



function App() {
  return (
   <div className="app">
    <h1>Weather app</h1>
		<Formulario />
    <Landing/>
    <SobreNosotras/>
   </div>
  
  );
}

export default App;
