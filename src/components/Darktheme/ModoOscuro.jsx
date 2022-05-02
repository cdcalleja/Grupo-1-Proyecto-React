import { Button, Modal } from 'react-bootstrap'
import { useReducer, useState } from 'react';
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';
import LanguajeContext from '../../context/LanguajeContext';
import AuthContext from '../../context/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { shoppingInitialState, shoppingReducer } from '../../reducers/shoppingReducer';
import CartItems from '../CartItems/CartItems';



const ModoOscuro = () => {
    const [count, setCount] = useState(0);

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { products, cart } = state;

    const [show, setShow] = useState(false);
    const handleClose1 = () => setShow(false);
    const handleShow1 = () => {
        setShow(true);
        handleAuth();
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { theme, handleTheme } = useContext(ThemeContext)
    const { text, handleLanguage } = useContext(LanguajeContext)
    const { auth, handleAuth } = useContext(AuthContext)



    const delFromCart = () => { }

    const clearCart = () => { }

    return (
        <header className={theme}>
            <div>
                {/* <Button onClick={handleShow1} >
                    {auth ? text.buttonLogout : text.buttonLogin}

                    {
                        <Modal show={show} onHide={handleClose1} style={{ paddingTop: "80px" }}>
                            <Modal.Header closeButton >
                                <Modal.Title ></Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                {auth ? text.mainWelcome : text.headerTittle}
                            </Modal.Body>
                            <Modal.Footer >
                                <Button variant="secondary" onClick={handleClose1}>
                                    {text.buttonInfo}
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    }
                </Button> */}
                <select name="languaje" onChange={handleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <button onClick={handleTheme} style={{ backgroundColor: "transparent", border: "none", marginLeft: "100px" }}>
                    {theme === "light" ? (<FontAwesomeIcon className="icon" icon={faSun} />) :
                        (<FontAwesomeIcon className="icon" icon={faMoon} />)
                    }
                </button>

                <div>
                    <Button className="position-relative" variant="primary" onClick={handleShow}>
                        <FontAwesomeIcon
                            style={{ border: "1px solid black", borderRadius: "50%", padding: "10px" }}
                            icon={faCartShopping} />
                        {count > 0 &&
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {count}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            
                        }
                    </Button>
                    {
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Tu compra</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                           fafa {
                                    cart.map((item, index) => <CartItems key={index} value={item} delFromCart={delFromCart}/>)
                                    } 
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button variant="primary" onClick={clearCart}>
                                    Limpiar carrito
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Finalizar compra
                                    
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    }
                </div>

            </div>
        </header>
    )
}

export default ModoOscuro