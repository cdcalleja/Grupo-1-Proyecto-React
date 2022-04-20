import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from "../Descanso/img/local1.jpg"
import img2 from "../Descanso/img/local2.jpg"
import img3 from "../Descanso/img/local4.jpg"


export const Descanso = () => {


    const estilos = {
        width:"100%",
        height: "60vh",
        borderRadius: "50px",
        padding: "20px"        
    }

    return (

        <>

            <Carousel>
                <Carousel.Item interval="500">
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Local1"
                        style={estilos}

                    />
                    <Carousel.Caption>
                        <h3>Visita nuestros locales</h3>
                        <p>Montagne</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Local2"
                        style={estilos}
                    />
                    <Carousel.Caption>
                        <h3>Visita nuestros locales</h3>
                        <p>Puma</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Local3"
                        style={estilos}
                    />
                    <Carousel.Caption>
                        <h3>Visita nuestros locales</h3>
                        <p>Under Armor</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}
