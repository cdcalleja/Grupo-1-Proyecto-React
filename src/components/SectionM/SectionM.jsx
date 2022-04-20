import React from 'react';
import img7 from "./img/img7.jpg";
import './SectionM.css';

const SectionM = () => {
return (
    <div>SectionM
        <button
            className = "Button" 
            >
            {" "}
            Compra Ahora{" "}
        </button>
        <img src={img7} alt="compras online" />
        <p>Ahora puedes realizar tus compras, las compras mayores a 15.000 no tienen costo de envio</p>
    </div>
)
}

export default SectionM