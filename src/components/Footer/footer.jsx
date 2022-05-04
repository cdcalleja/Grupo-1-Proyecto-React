import "./footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
   return (

<footer>
<div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
</div>
<ul class="social_icon">
    <li><a href="/"><FontAwesomeIcon icon={faFacebook} size="xl"/></a></li>
    <li><a href="/"><FontAwesomeIcon icon={faTwitter} size="xl"/></a></li>
    <li><a href="/"><FontAwesomeIcon icon={faLinkedin} size="xl"/></a></li>
    <li><a href="/"><FontAwesomeIcon icon={faInstagram} size="xl"/></a></li>
    <li><a href="/"><FontAwesomeIcon icon={faYoutube} size="xl"/></a></li>
</ul>


<section>
<div class="col1">
<h3>Quiénes Somos</h3>
<ul>
<li>Empresa</li>
<li>Estilos</li>
<li>Nuestra Visión</li>
<li>Nuestra Misión</li>
</ul>
</div>

<div class="col2">
<h3>Productos</h3>
<ul>
<li>Niños</li>
<li>Mujer</li>
<li>Hombre</li>
<li>Accesorios</li>
</ul>
</div>

<div class="col3">
<h3>Servicios</h3>
<ul>
<li>Promociones</li>
<li>Envíos y Cambios</li>
<li>Seguimiento</li>
<li>Tabla de Talles</li>
</ul>
</div>

<div class="col4">
<h3>Contacto</h3>
<ul>
<li>Locales</li>
<li>Dirección</li>
<li>Representaciones</li>
<li>Otros</li>
</ul>
</div>
</section>
<p>  2022 | Derechos Reservados |
        Terminos de Servicios | Privacidad
</p>

</footer> 
   )
}

export default Footer

