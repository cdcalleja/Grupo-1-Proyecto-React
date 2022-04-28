import NavBar from "./components/Nav/Nav.jsx";
import Descanso from "./components/Descanso/Descanso.jsx";


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
    </div>
  );
}

export default App;
