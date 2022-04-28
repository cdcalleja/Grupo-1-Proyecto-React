
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Logo from './img/Logo6.png'


import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"


const NavBar = (props) => {

  const styles = {
    fontSize: "25px",
    textTransform: "capitalize",
    fontFamily: "cursive",
  }

  return (


    <Navbar className="shadow" sticky="top" collapseOnSelect expand="lg" bg="light" variant="light" style={{ borderRadius: "20px" }}>
      <Container className="d-flex p-2">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" style={{ width: "60px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" style={styles}>
            <NavDropdown title="Clothes" id="collasible-nav-dropdown" >
              {props.seccion.map(section => {
                return (<NavDropdown.Item href="#action/3.1" key={section.id}>{section.section}</NavDropdown.Item>
                )
              })}
            </NavDropdown>
            {props.seccion2.map(section => {
              return (<Nav.Link className="mx-4" href="#accesories" key={section.id}>{section.section}</Nav.Link>
              )
            })}
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

  )

}

export default NavBar

