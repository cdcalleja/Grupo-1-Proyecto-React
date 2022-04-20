import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';




const Emergente = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [contador, setContador] = useState(0);
    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return (
        <>
            
            <Button variant="primary" onClick={handleShow}>
                Detalles
            </Button>
            {
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Compras</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Button onClick={sumar}> + </Button>
                            <span>  {contador}  </span>
                            <Button onClick={restar}> - </Button>

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