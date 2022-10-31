import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import "./styles/App.css"

function App() {
  return (
    /*Manejador de rutas de la aplicacion con react-router-dom*/
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            /*Cuando la ruta sea / se renderiza el elemento HomeScreen*/
          }
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
