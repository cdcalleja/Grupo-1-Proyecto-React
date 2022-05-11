import NavBar from "./components/Nav/Nav.jsx";
// import Descanso from "./components/Descanso/Descanso.jsx";
import Details from "./components/Detalles/Details";
import ModoOscuro from "./components/Darktheme/ModoOscuro";
import Productos from "./components/Productos/Productos";
import Banner from "./components/Banner/Banner";
import CarouselM from "./components/CarouselM/CarouselM";
import SectionM from "./components/SectionM/SectionM";
import Footer from "./components/Footer/Footer";
import { ShopCartProvider } from "./context/shopCartContext.js";
import Descanso2 from "./components/Descanso/Descanso2.jsx";


function App() {

  return (
    <div>
      <ShopCartProvider>
        <NavBar />
        <ModoOscuro />
        <Banner />
        <Productos />
        <Details />
        <CarouselM />
        <Descanso2 />
        <SectionM />
        <Footer />
      </ShopCartProvider>


    </div>
  );
}
export default App;
