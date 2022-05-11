import NavBar from "./components/Nav/Nav.jsx";
import Descanso from "./components/Descanso/Descanso.jsx";
import Details from "./components/Detalles/Details";
import Productos from "./components/Productos/Productos";
import Banner from "./components/Banner/Banner";
import CarouselM from "./components/CarouselM/CarouselM";
import SectionM from "./components/SectionM/SectionM";
import Footer from "./components/Footer/Footer";
import "./app.css";
import { ThemeProvider } from "./context/ThemeContext.js";
import { ShopCartProvider } from "./context/ShopCartContext.js";


function App() {

  return (

    <div className="proyecto">

        <ThemeProvider>
          <ShopCartProvider>
            <NavBar/>
            <Descanso/>
            <Banner/>
            <Productos/>
            <Details/>
            <CarouselM/>
            <SectionM/>
            <Footer/>
          </ShopCartProvider>
        </ThemeProvider>
    </div>
  );
}
export default App;
