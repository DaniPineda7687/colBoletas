import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import "./styles/App.css"
import { SpecificScreen } from "./screens/SpecificScreen";
import Header from "./components/Header";

function App() {
  return (
    /*Manejador de rutas de la aplicacion con react-router-dom*/
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          {
            /*Cuando la ruta sea / se renderiza el elemento HomeScreen*/
          }
          <Route path="/" element={<HomeScreen/>} />
          <Route path={`/especifico/:id`} element={<SpecificScreen/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
