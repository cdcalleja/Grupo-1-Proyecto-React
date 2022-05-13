import React from "react";
import img7 from "./img/img7.jpg";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Button } from "react-bootstrap";
const SectionM = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
        <br />
        <br />
      <div className="container-fluid">
      <div className='row'>
      <div className='col-12 col-md-6'>
        <img className='img-fluid'
          src={img7}
          alt="compras online"
          style={{ float: "left", maxHeight: 500 }}
          />
          </div>

        <div className='col-12 fs-6 text col-md-6 fs-2 text'>
        <h3 style={{ fontWeight:"bold", textDecoration:"underline", fontFamily:"cursive"}}>
          Las compras mayores a $15.000 no
          tienen costo de envio
        </h3>
        <br />
        <ol style={{fontFamily: "cursive", fontStyle: "normal", fontWeight: "500", 
        lineHeight: "2em"}}>
          <li>Descuentos del 10% en mercancia seleccionada!</li>
          <li>Nueva temporada de invierno para grandes y chicos!</li>
          <li>Nuevas sucursales en Buenos Aires!</li>
        </ol>
          <a href="#productos">
        <Button className="Button" style={{ borderRadius: "5px", background: "orange", color: "white"}}>
          {" "}
          <span style={{fontSize:"20px", margin:"20px"}}>
          Compre Ahora{" "}
          </span>
        </Button>
          </a>
          </div>
      </div>
      </div>
    </div>
  );
};

export default SectionM;
