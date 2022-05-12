import React from 'react';
import img7 from "./img/img7.jpg";
// import { useContext } from 'react'
// import ThemeContext from '../../context/ThemeContext';
const SectionM = () => {

    // const {theme} = useContext(ThemeContext)

return (
    <div>
        <button
            className = "Button" style={{width: "140px", height: "45px", left: "655px", top: "3131px", borderRadius: "5px", position: "absolute", background:"orange"}}
            >
            {" "}
            Comprar Ahora{" "}
        </button> 
        <img src={img7} alt="compras online" style={{width:"570px", height:"432px", top:"2797px", left:"55px", position: "absolute"}}/>
        <h3 style={{width:"569px", height:"97px", top: "2850px", left: "656px", fontFamily: "Cormorant", fontStyle: "normal", fontWeight:"700", fontSize: "40px", lineHeight:"48px", position:"absolute" }}>
        Compras mayores a 15.000 no tienen costo de envio</h3>
    <ul style= {{position: "absolute", width:"569px", height:"134px", left: "656px", top: "2967px", fontFamily: "Poppins", fontStyle:"normal", fontWeight:"500", fontSize: "16px", lineHeight:"24px"}}>
        <li>descuentos del 10% en mercancia seleccionada</li>
        <li>nueva temporada de invierno para grandes y chicos</li> 
        <li>nuevas sucursales en Buenos Aires</li>
    </ul>
        <p style={{marginBottom:"0px"}}>Ahora puedes realizar tus compras, las compras mayores a 15.000 no tienen costo de envio</p>
    </div>
)
}

export default SectionM