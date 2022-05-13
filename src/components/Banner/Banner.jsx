import img11 from "./img/img11.jpg";
import ThemeContext from '../../context/ThemeContext';
import { useContext } from "react";
import"./banner.css";
import { Button } from "react-bootstrap";

const Banner = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme} style={{backgroundImage: `url(${img11})`, backgroundSize: "cover", backgroundPosition: "center", height: "50vh"}}>
      <h2 style={{ fontStyle: "normal", fontWeight:"700,Bold", fontSize:"50px", lineHeight:"61px", textAlign:"left", marginLeft:"20px", fontFamily: "cursive"}}>Disfruta del otoño</h2>
      <h3 style={{ fontStyle: "normal", fontWeight:"300,Light", fontSize:"26px", lineHeight:"39px", textAlign:"left", marginLeft:"20px", fontFamily: "cursive"}}>Descuentos en mercancia seleccionada</h3>
      <a href="#productos">
        <br /><br />
      <Button
      className = "Button" style={{ width:"200px", height: "45px", background: "orange", borderRadius:"5px",cursor:"pointer", float:"left", marginLeft:"20px", color:"white"}}
      >
      {" "}
      Ofertas{" "}
      </Button>
      </a>
    </div>
  )
}

export default Banner