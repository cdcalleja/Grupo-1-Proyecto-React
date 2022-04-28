import NavBar from "./components/Nav/Nav.jsx";
import Descanso from "./components/Descanso/Descanso.jsx";
import Details from "./components/Detalles/Details";
import ModoOscuro from "./components/Darktheme/ModoOscuro";
import Productos from "./components/Productos/Productos";
import Banner from "./components/Banner/Banner";
import CarouselM from "./components/CarouselM/CarouselM";
import SectionM from "./components/SectionM/SectionM";
import Footer from "./components/Footer/Footer";


function App() {

  const principales = [
    { id: 1, section: 'accesories' },
    { id: 2, section: 'outlet' },
    { id: 3, section: 'abount us' }
  ]

  const secundarias = [
    { id: 1, section: 'men' },
    { id: 2, section: 'women' },
    { id: 3, section: 'kids' }
  ] 

  return (
    <div>

      
      {/* <Header/> */}
      
      <NavBar seccion = {secundarias} 
              seccion2 = {principales}/>

      <Descanso/>            

      <ModoOscuro />
      <NavBar />
      <Descanso />
      <Banner />
      <Productos />
      <Details />
      <CarouselM />
      <SectionM />
      <Footer />

    </div>
  );
}
export default App;
