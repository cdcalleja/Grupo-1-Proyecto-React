import React from "react";
import { Carousel } from "react-bootstrap";
import img6 from "./img/img6.jpg";
import img2 from "./img/img2.jpg";
import img5 from "./img/img5.jpg";


const CarouselM = () => {
    return (
    <Carousel>
    <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="First slide" />
        <Carousel.Caption>
        <h3>invierno 2022</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src= {img2} alt="Second slide" />

        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Third slide" />

        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
);
};
export default CarouselM;
