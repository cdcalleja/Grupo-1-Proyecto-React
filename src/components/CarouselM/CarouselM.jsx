import React from "react";
import { Carousel } from "react-bootstrap";
import img6 from "./img/img6.jpg";
import img2 from "./img/img2.jpg";
import img5 from "./img/img5.jpg";



const CarouselM = () => {
    return (
    <Carousel>
    <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="First slide" style= {{width: "1280px", height: "500px", position:"absolute", top: "185px"}}/>
        <Carousel.Caption>
        <h3>invierno 2022</h3>
        <p>Conoce la nueva colección de invierno</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src= {img2} alt="Second slide" style= {{width: "1280px", height: "500px", position:"absolute", top: "185px"}}/>

        <Carousel.Caption>
        <h3>Todo para ellas</h3>
        <p>Descuentos en prendas para las consentidas de la casa</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Third slide" style= {{width: "1280px", height: "500px", position:"absolute", top: "185px"}}/>

        <Carousel.Caption>
        <h3>Compras online con descuentos</h3>
        <p>Disfruta de descuentos por compras en la web</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
);
};
export default CarouselM;