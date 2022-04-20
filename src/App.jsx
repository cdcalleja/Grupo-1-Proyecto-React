import Details from "./components/Detalles/Details";
import Products from "./components/Productos/Products";
import ModoOscuro from "./components/Darktheme/ModoOscuro";
import Productos from "./components/Productos/Productos";




function App() {
  return (
    <div>
      <ModoOscuro></ModoOscuro>
      <Products></Products>
      <br /><br />
      <Productos></Productos>
      <br /><br /><br />
      <Details></Details>
  

      {/* ToDoList
Navbar (Rodrigo)
Hero / Banner (Mileidy)
Productos (Christian)
Detalles / particularidades (Christian)
Seccion -> Detalles e imágenes (Santiago)
Seccion -> Detalles e imágenes 2 (Mileidy)
Descanso (Rodrigo)
Carousel (Santiago)
Redes (Berta)
Footer (Berta) */}
    </div>
  );
}

export default App;
