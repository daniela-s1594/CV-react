import "../src/App.css";
import  Portafolio  from "../src/Pages/Portafolio";
import { Routes, Route } from "react-router-dom";
import  Home  from "../src/Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portafolio" element={<Portafolio />} />
    </Routes>
  );
}

export default App;
