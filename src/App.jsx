import NavBar from "./components/Nav/Nav.jsx";
// import Descanso from "./components/Descanso/Descanso.jsx";
import Details from "./components/Detalles/Details";
import Productos from "./components/Productos/Productos";
import Banner from "./components/Banner/Banner";
import CarouselM from "./components/CarouselM/CarouselM";
import SectionM from "./components/SectionM/SectionM";
import Footer from "./components/Footer/Footer";
import Redes from "./components/Redes/Redes";

import "./app.css";

import { ShopCartProvider } from "./context/shopCartContext.js";
import Descanso2 from "./components/Descanso/Descanso2.jsx";
import { ThemeProvider } from "./context/ThemeContext.js";


function App() {

  return (



    <div className="proyecto">

      <ThemeProvider>
        <ShopCartProvider>
          <NavBar />
          <Banner />
          <Productos />
          <Details />
          <CarouselM />
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
