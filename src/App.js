import "./App.css";
import Opinion from "./components/Opinion.jsx";

export function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Estas son opiniones</h1>
        <Opinion />
      </div>
    </div>
  );
}

export default App;
