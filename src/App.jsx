import "./App.css";
import { ContenedorProductos } from "./components/ContenedorProductos";
import { ModalCarrito } from "./components/ModalCarrito";
import { Navbar } from "./components/Navbar";
import { SliderIndex } from "./components/SliderIndex";

function App() {
  return (
    <>
      <Navbar />
      <ModalCarrito />
      <SliderIndex />
      <ContenedorProductos />
    </>
  );
}

export default App;
