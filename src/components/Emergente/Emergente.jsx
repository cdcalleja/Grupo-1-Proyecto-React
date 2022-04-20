import React from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';




const Emergente = ({ name, pricenew }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [contador, setContador] = useState(1);
    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    let price =  pricenew ;


    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Detalles
            </Button>
            {
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col lg={4}>
                                    Cantidad
                                </Col>
                                <Col lg={4}>
                                    Precio Unitario
                                </Col>
                                <Col lg={4}>
                                    Precio Total
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={4}>
                                    <Button onClick={restar}> - </Button>
                                    <span>  {contador} </span>
                                    <Button onClick={sumar}> + </Button>
                                </Col>
                                <Col lg={4}>
                                    <span>{pricenew}</span>
                                </Col>
                                <Col lg={4}>
                                    <span>{price*contador}</span>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Agregar al carrito
                        </Button>
                    </Modal.Footer>
                </Modal>

            }


        </>


    )
}

export default Emergente