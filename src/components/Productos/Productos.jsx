import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Col, Card} from "react-bootstrap";
import '../Productos/products.css'
import { ofertasDB } from "../../data/ofertas";
import Emergente from "../Emergente/Emergente";
// import { useState } from 'react';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

const Productos = () => {



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1600,
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
                    initialSlide: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <Container fluid>
            <h2 className="tituloofertas"> Ofertas </h2>
            <br />
            <Container>
                <Slider {...settings}>
                    {

                        ofertasDB.map(item => (
                            <Col xs={12} md={4} lg={2} key={item.id}>
                                <Card className="text-center shadow m-2 m-md-1 h-100" style={{ boxSizing: "content-box" }}>
                                    <Card.Body >
                                        <Card.Title></Card.Title>
                                        <Card.Img variant="top" src={item.img} />
                                        <span className="price-old">{item.priceold}</span>
                                        <br></br>
                                        <span className="price-offer">AR$ {item.pricenew}</span>
                                        <span className="price-name"> {item.promo}</span>
                                        <br />
                                        <span className="cuotas"> Pagalo en 6 cuotas sin interés con Visa, Mastercard o American Express bancaria.</span>
                                        <br />

                                        <Emergente name= {item.name} pricenew={item.pricenew} id= {item.id}/>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }

                </Slider>
            </Container>
        </Container>
    );


}

export default Productos