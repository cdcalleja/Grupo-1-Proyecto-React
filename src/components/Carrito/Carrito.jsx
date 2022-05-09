import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import shopCartContext from "../../context/ShopCartContext";


const Carrito = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cartCount, remove, clearCart, cartInfo, cartPrice } = useContext(shopCartContext)

 


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
      </Button >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Container >
            <Row >
              <Col lg={3} >
                Cantidad
              </Col>
              <Col lg={3} >
                Item
              </Col>
              <Col lg={3} >
                Precio Unitario
              </Col>
              <Col lg={3} >
                Precio Total
              </Col>
            </Row>

          
             {
              cartInfo.map((item) => {
                return (
                  <Row key={item.id}>
                    <Col lg={3}>{cartCount}</Col>
                    <Col lg={3}>{item.name}</Col>
                    <Col lg={3}>{item.pricenew}</Col>
                    {/* <Col lg={3}> {cartPrice}</Col> */}
                  </Row>
                )
              })
            } 
            <br />
            <Row >
              <Col lg={9} style={{fontStyle: "bold", fontSize: 20}}>
                El total de tu compra es:
              </Col>
              <Col lg={3} >
              {cartPrice}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          
     
          {cartCount === 0 ? <Button disabled> Eliminar un item del carrito </Button> : <Button onClick={remove}> Eliminar un item del carrito </Button>}
          
          
          <Button variant="secondary" onClick={clearCart}>
            Vaciar carrito
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Finalizar compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Carrito;