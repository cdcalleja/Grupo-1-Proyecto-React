
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Logo from './img/Logo6.png'
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';
import LanguajeContext from "../../context/LanguajeContext"

const NavBar = () => {

  const {theme} = useContext(ThemeContext);
  const { text } = useContext(LanguajeContext)


  const styles = {
    fontSize: "25px",
    textTransform: "capitalize",
    fontFamily: "cursive",

  }

  return (

    <div className={theme}>
    <Navbar className="shadow" sticky="top" collapseOnSelect expand="lg" bg="light" variant="light" style={{ borderRadius: "20px" }}>
      <Container className="d-flex p-2">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" style={{ width: "60px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" style={styles}>
            <NavDropdown title={text.navtitle} id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">{text.navmen}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">{text.navwomen}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{text.navkid}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-4" href="#accesories">accesories</Nav.Link>
            <Nav.Link className="mx-4" href="#outlet">otulet</Nav.Link>
            <Nav.Link className="mx-4" href="#about us">about us</Nav.Link>
          </Nav>
          <Nav style={styles}>
            <Nav.Link href="#deets">
              <FontAwesomeIcon style={{ border: "1px solid black", borderRadius: "50%", padding: "10px" }} icon={faMagnifyingGlass} />
            </Nav.Link>
            <Nav.Link href="#deets">
              <FontAwesomeIcon
                style={{ border: "1px solid black", borderRadius: "50%", padding: "10px" }}
                icon={faUser} />
            </Nav.Link>
            <Nav.Link href="#deets">
              <FontAwesomeIcon
                style={{ border: "1px solid black", borderRadius: "50%", padding: "10px" }}
                icon={faCartShopping} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )

}

export default NavBar

