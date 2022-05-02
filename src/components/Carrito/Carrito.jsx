import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import shopCartContext from "../../context/ShopCartContext";


const Carrito = () => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {cartCount} = useContext(shopCartContext)



    return (
      <>
        <Button  className="position-relative" variant="primary" onClick={handleShow}>
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
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
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