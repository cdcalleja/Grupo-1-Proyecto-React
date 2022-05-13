import Seccion1 from "./components/Seccion1/Seccion1";
import CarouselS from "./components/CarouselS/CarouselS";
import NavBar from "./components/Nav/Nav.jsx";
import Details from "./components/Detalles/Details";
import Productos from "./components/Productos/Productos";
import Banner from "./components/Banner/Banner";
import SectionM from "./components/SectionM/SectionM";
import Footer from "./components/Footer/Footer";
import Redes from "./components/Redes/Redes";
import "./app.css";
import { ShopCartProvider } from "./context/ShopCartContext.js";
import Descanso2 from "./components/Descanso/Descanso2.jsx";
import { ThemeProvider } from "./context/ThemeContext.js";
import Main from "./components/Main/Main";


function App() {

  return (
    <div className="proyecto">
      <ThemeProvider>
        <ShopCartProvider>
          <Main/>
          <NavBar />
          <Banner />
          <Seccion1 />
          <CarouselS />
          <Productos />
          <Details />
          <Descanso2 />
          <SectionM />
          <Redes />
          <Footer />
        </ShopCartProvider>
      </ThemeProvider>
    </div>
  );
}
export default App;
