import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import shopCartContext from '../../context/shopCartContext';


const Carrito = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { cartCount, cartInfo, remove, clearCart, cartPrice } = useContext(shopCartContext)

  return (
    <>
      <Button className="position-relative" variant="primary" onClick={handleShow}>
        <FontAwesomeIcon
          style={{ border: "1px solid black", borderRadius: "50%", padding: "10px" }}
          icon={faCartShopping} />
        {cartCount > 0 &&
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartCount}
            <span className="visually-hidden">unread messages</span>
          </span>
        }
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row style={{textAlign: "center"}}>
              <Col lg={2}>
                Cantidad
                {console.log({ cartCount })}
              </Col>
              <Col lg={4}>
                Item
                {console.log({ cartInfo })}
              </Col>
              <Col lg={4}>
                Precio Unitario
                {console.log({ cartPrice })}
              </Col>
              <Col lg={2}>

              </Col>
            </Row>
            <br />

            {cartInfo.map((item) => {
              return (
                <Row key={item.id} style={{textAlign: "center"}}>
                  <Col lg={3}>{item.quantity}</Col>
                  <Col lg={3}>{item.name}</Col>
                  <Col lg={3}>{item.price}</Col>
                  <Col lg={2}>
                    {item.quantity === 0 ? <Button disabled><FontAwesomeIcon icon={faXmark} /></Button> : <Button onClick={() => remove(item.id)}><FontAwesomeIcon icon={faXmark} /></Button>
                    }
                  </Col>
                </Row>
              )
            })}
            <br />
            <Row>
              <Col lg={9} style={{ fontStyle: "bold", fontSize: 20 }}>
                El total de tu compra es:
              </Col>
              <Col lg={3}>
                {cartPrice}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={clearCart}>
            Vaciar carrito
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Finalizar compra
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  )

}

export default Carrito;
