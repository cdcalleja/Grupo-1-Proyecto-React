import './CarouselS.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img01 from './imagenes/mujer.jpg';
import img02 from './imagenes/hombre.jpg';
import img03 from './imagenes/ninas2.jpg';
import img04 from './imagenes/ninos2.jpg';
import img05 from './imagenes/bebes.jpg';
import img06 from './imagenes/calzado.jpg';
import img07 from './imagenes/accesoriosmujer.jpg';
import img08 from './imagenes/accesorioshombre.jpg';
import img09 from './imagenes/marroquineria.jpg';
import img10 from './imagenes/camping.jpg';

import ThemeContext from '../../context/ThemeContext';
import { useContext } from "react";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

// export default class MultipleItems extends Component {

  const CarouselS = () => {

    const { theme } = useContext(ThemeContext)

      var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      speed: 500,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    return (
      <div className={theme}>

      <div className='sec' style={{width: "90%", margin: "auto"}}>
        <br /><br />
        <h2>Secciones</h2>
          <Slider {...settings}>
            <div className='img'>
              <h3>Mujer</h3>
              <img src={img01} className='img-fluid' alt="Indumentaria Mujer" />
            </div>
            <div className='img'>
              <h3>Hombre</h3>
              <img src={img02} className='img-fluid' alt="Indumentaria Hombre" />
            </div>
            <div className='img'>
              <h3>Niñas</h3>
              <img src={img03} className='img-fluid' alt="Indumentaria Niñas" />
            </div>
            <div className='img'>
              <h3>Niños</h3>
              <img src={img04} className='img-fluid' alt="Indumentaria Niños" />
            </div>
            <div className='img'>
              <h3>Bebes</h3>
              <img src={img05} className='img-fluid' alt="Indumentaria Bebes" />
            </div>
            <div className='img'>
              <h3>Calzados</h3>
              <img src={img06} className='img-fluid' alt="Calzados" />
            </div>
            <div className='img'>
              <h3>Acc. Mujer</h3>
              <img src={img07} className='img-fluid' alt="Accesorios Mujer" />
            </div>
            <div className='img'>
              <h3>Acc. Hombre</h3>
              <img src={img08} className='img-fluid' alt="Accesorios Hombre" />
            </div>
            <div className='img'>
              <h3>Marroquinería</h3>
              <img src={img09} className='img-fluid' alt="Marroquinería" />
            </div>
            <div className='img'>
              <h3>Camping</h3>
              <img src={img10} className='img-fluid' alt="camping" />
            </div>
            </Slider>
            <br /><br />
          </div>
      </div>
    );
  
}

export default CarouselS;