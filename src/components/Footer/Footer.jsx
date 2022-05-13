import "./footer.css";
import React from "react";
// import { useContext } from "react";
// import ThemeContext from "../../context/ThemeContext";

const Footer = () => {
//   const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> Nosotros </h4>
              <ul className="list-unstyled">
                <li> Dirección</li>
                <li> Localidad: Buenos Aires</li>
                <li> País: Argentina</li>
                <li> Email</li>
              </ul>
            </div>
            <div className="col">
              <h4>Consultas</h4>
              <ul className="list-unstyled">
                <li>Poductos</li>
                <li>La empresa</li>
                <li>Consultas Reclamos </li>
              </ul>
            </div>
            <div className="col">
              <h4>Quiénes Somos</h4>
              <ul className="list-unstyled">
                <li>Empresa</li>
                <li>Estilos</li>
                <li>Nuestra Visión</li>
                <li>Nuestra Misión</li>
              </ul>
            </div>
            <div className="col">
              <h4>Productos</h4>
              <ul className="list-unstyled">
                <li>Niños</li>
                <li>Mujer</li>
                <li>Hombre</li>
                <li>Accesorios</li>
              </ul>
            </div>
            <div className="col">
              <h4>Servicios</h4>
              <ul className="list-unstyled">
                <li>Promociones</li>
                <li>Envíos y Cambios</li>
                <li>Seguimiento</li>
                <li>Tabla de Talles</li>
              </ul>
            </div>
            <div className="col">
              <h4>Contacto</h4>
              <ul className="list-unstyled">
                <li>Locales</li>
                <li>Dirección</li>
                <li>Representaciones</li>
                <li>Otros</li>
              </ul>
            </div>
          </div>
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <p>
            {" "}
            2022 | Derechos Reservados | Terminos de Servicios | Privacidad{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
