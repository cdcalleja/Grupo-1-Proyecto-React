import React from 'react';
import img7 from "./img/img7.jpg";
import './SectionM.css';
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';

const SectionM = () => {

    const {theme} = useContext(ThemeContext)

return (
    <div className={theme}>SectionM
        <button
            className = "Button" 
            >
            {" "}
            Compra Ahora{" "}
        </button>
        <img src={img7} alt="compras online" />
        <p style={{marginBottom:"0px"}}>Ahora puedes realizar tus compras, las compras mayores a 15.000 no tienen costo de envio</p>
    </div>
)
}

export default SectionM