import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Col, Card, Button } from "react-bootstrap";
import '../Productos/products.css'
import { ofertasDB } from "../../data/ofertas";

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


export default class Responsive extends Component {
    render() {
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
                    ofertasDB.map((e, index) => (
                        <Col xs={12} md={4} lg={2} key= {index}>
                            <Card className="text-center shadow m-2 m-md-1"style={{boxSizing: "content-box"}}>
                                <Card.Body >
                                    <Card.Title>{e.name}</Card.Title>
                                    <Card.Img variant="top" src={e.img} />
                                    <span className="price-old">{e.priceold}</span>
                                    <br></br>
                                    <span className="price-offer">{e.pricenew}</span>
                                    <span className="price-name">     {e.promo}</span>
                                    <br />
                                    <span className= "cuotas"> Pagalo en 6 cuotas sin interés con Visa, Mastercard o American Express bancaria.</span>
                                    <br />
                                    <Button variant="secondary">Comprar</Button>
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
}