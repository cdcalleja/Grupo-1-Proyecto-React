import "./footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
return (
    <>
    // <img src="img/logo.webp" alt=""></img>
    <div className="main-footer">
    <div className="container">
    <div className="row">
        {/* {Colum 1} */}
        <div className="col">
            <h4> Nosotros </h4>
            <ul className="list-unstyled">
            <li> Dirección</li>
            <li> Localidad: Buenos Aires</li>
            <li> País: Argentina</li>
            <li> Email</li>
            </ul>
        </div>
          {/* {Colum2} */}
        <div className="col">
            <h4>Consultas</h4>
            <ul className="list-unstyled">
            <li>Poductos</li>
            <li>La empresa</li>
            <li>Consultas Reclamos </li>
            </ul>
        </div>
          {/* {Columna 3} */}
        <div className="col">
            <h4>Redes Sociales</h4>
            <FontAwesomeIcon icon={faFacebook} size="xl"/>
            <FontAwesomeIcon icon={faTwitter} size="xl"/>
            <FontAwesomeIcon icon={faLinkedin} size="xl"/>
            <FontAwesomeIcon icon={faInstagram} size="xl"/>
            <FontAwesomeIcon icon={faYoutube} size="xl"/>
            </div>
        <hr />
        <div className="row">
            <p className="col-sm">
            &copy;{new Date().getFullYear()} Nosotros | Derechos Reservados !
            Terminos de Servicios ! Privacidad
            </p>
            </div>
        </div>
    </div>
</div>
</>
);
};
export default Footer;
