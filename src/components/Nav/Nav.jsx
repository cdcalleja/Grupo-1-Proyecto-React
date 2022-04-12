
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faCartShopping  } from "@fortawesome/free-solid-svg-icons"
import Logo from './img/Logo6.png'


import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"


const NavBar = () => {

    const styles =   {
            fontSize: "25px",
            textTransform: "capitalize",
            fontFamily:"cursive",
                      
        } 

    

    return (


        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{borderRadius:"20px"}}>
        <Container className= "d-flex p-2">
        <Navbar.Brand href="#home">
        <img src={Logo} alt="logo" style={{width: "100px"}}/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto"   style={styles}>
          <NavDropdown title="Clothes" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">men</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">discontinued clothing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#accesories">accesories</Nav.Link>
            <Nav.Link href="#outlet">otulet</Nav.Link>
            <Nav.Link href="#about us">about us</Nav.Link>
          </Nav>
          <Nav style={styles}>
            <Nav.Link href="#deets">
             <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Nav.Link>
                <Nav.Link href="#deets">             
             <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
                <Nav.Link href="#deets">
             <FontAwesomeIcon icon={faCartShopping} />
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    )

}

export default NavBar

      