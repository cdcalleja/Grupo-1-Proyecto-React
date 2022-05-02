
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import {  useContext, useState } from 'react';
import shopCartContext from '../../context/ShopCartContext';

const Emergente = ({name, pricenew}) => {
    const [show, setShow] = useState(false);
    const {add} = useContext(shopCartContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [contador, setContador] = useState(1);
    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);
    let price = pricenew;




    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Detalles
            </Button>
            {
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton >
                        <Modal.Title >{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Container >
                            <Row >
                                <Col lg={4} >
                                    Cantidad
                                </Col>
                                <Col lg={4} >
                                    Precio Unitario
                                </Col>
                                <Col lg={4} >
                                    Precio Total
                                </Col>
                            </Row>

                            <Row >
                                <Col lg={4} >
                                    {contador === 0 ? <Button disabled> - </Button> : <Button onClick={restar}> - </Button>}
                                    <span >  {contador} </span>
                                    <Button onClick={sumar}> + </Button>
                                    {/* <Button onClick={restar}> - </Button> */}
                                </Col>
                                <Col lg={4} >
                                    <span >{pricenew}</span>
                                </Col>
                                <Col lg={4} >
                                    <span >{price * contador}</span>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={add}>
                            Agregar al carrito
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}

export default Emergente