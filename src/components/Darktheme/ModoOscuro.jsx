import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';
import LanguajeContext from '../../context/LanguajeContext';
import AuthContext from '../../context/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faCartShopping } from "@fortawesome/free-solid-svg-icons";




const ModoOscuro = () => {
    const [count, setCount] = useState(0);



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        handleAuth();
    }


    const { theme, handleTheme } = useContext(ThemeContext)
    const { text, handleLanguage } = useContext(LanguajeContext)
    const { auth, handleAuth } = useContext(AuthContext)



    return (
        <header className={theme}>
            <div>
                <Button onClick={handleShow} >
                    {auth ? text.buttonLogout : text.buttonLogin}

                    {
                        <Modal show={show} onHide={handleClose} style={{ paddingTop: "80px" }}>
                            <Modal.Header closeButton >
                                <Modal.Title ></Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                {auth ? text.mainWelcome : text.headerTittle}
                            </Modal.Body>
                            <Modal.Footer >
                                <Button variant="secondary" onClick={handleClose}>
                                    {text.buttonInfo}
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    }
                </Button>
                <select name="languaje" onChange={handleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <button onClick={handleTheme} style={{ backgroundColor: "transparent", border: "none", marginLeft: "100px" }}>
                    {theme === "light" ? (<FontAwesomeIcon className="icon" icon={faSun} />) :
                        (<FontAwesomeIcon className="icon" icon={faMoon} />)
                    }
                </button>

            </div>
        </header>
    )
}

export default ModoOscuro