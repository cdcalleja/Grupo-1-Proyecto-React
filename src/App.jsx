import NavBar from "./components/Nav/Nav.jsx";
import Descanso from "./components/Descanso/Descanso.jsx";
import Details from "./components/Detalles/Details";
import ModoOscuro from "./components/Darktheme/ModoOscuro";
import Productos from "./components/Productos/Productos";
import Banner from "./components/Banner/Banner";
import CarouselM from "./components/CarouselM/CarouselM";
import SectionM from "./components/SectionM/SectionM";
import Footer from "./components/Footer/Footer";
import "./app.css";
import { ThemeProvider } from "./context/ThemeContext.js";
import { LanguajeProvider } from "./context/LanguajeContext.js";
import { AuthProvider } from "./context/AuthContext.js";
import { ShopCartProvider } from "./context/ShopCartContext.js";





function App() {

  return (

    <div className="proyecto">
      <AuthProvider>
        <ThemeProvider>
          <ShopCartProvider>
          <LanguajeProvider>
            <ModoOscuro />
            <NavBar/>
            <Descanso/>
            <Banner/>
            <Productos/>
            <Details/>
            <CarouselM/>
            <SectionM/>
            <Footer/>
          </LanguajeProvider>
          </ShopCartProvider>
        </ThemeProvider>
      </AuthProvider>

    </div>
  );
}
export default App;
