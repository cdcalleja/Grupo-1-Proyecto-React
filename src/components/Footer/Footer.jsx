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
          </div>
          <div className="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
          </div>

          <section>
            <div className="col1">
              <h3>Quiénes Somos</h3>
              <ul>
                <li>Empresa</li>
                <li>Estilos</li>
                <li>Nuestra Visión</li>
                <li>Nuestra Misión</li>
              </ul>
            </div>

            <div className="col2">
              <h3>Productos</h3>
              <ul>
                <li>Niños</li>
                <li>Mujer</li>
                <li>Hombre</li>
                <li>Accesorios</li>
              </ul>
            </div>

            <div className="col3">
              <h3>Servicios</h3>
              <ul>
                <li>Promociones</li>
                <li>Envíos y Cambios</li>
                <li>Seguimiento</li>
                <li>Tabla de Talles</li>
              </ul>
            </div>

            <div className="col4">
              <h3>Contacto</h3>
              <ul>
                <li>Locales</li>
                <li>Dirección</li>
                <li>Representaciones</li>
                <li>Otros</li>
              </ul>
            </div>
          </section>
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
