
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faCartShopping  } from "@fortawesome/free-solid-svg-icons"
import Logo from './img/Logo5.jpeg'


import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"


const Header = () => {

    const styles =   {
            fontSize: "25px",
            textTransform: "uppercase"        
        } 

    

    return (


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
        <img src={Logo} alt="logo" style={{width: "80px"}}/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto"   style={styles}>
          <NavDropdown title="CLOTHE" id="collasible-nav-dropdown" >
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
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    )

}

export default Header

// alt shift F me acomoda el codigo

  // const divs = {

    //     backgroundColor: 'lightgreen',
    //     witdh: '100%',
    //     height: '200px',
    // }

    // const NavegationBar = [

    //     { id: 1, name: 'Home' },
    //     { id: 2, name: 'Productos' },
    //     { id: 3, name: 'Ofertas' },
    //     { id: 4, name: 'Destacados' },
    //     { id: 5, name: 'Nosotros' },
    // ]

//     <header style={divs}>

//     <h1>Nav</h1>


    
//     <nav style={{textAlign: "right"}}>
//         <FontAwesomeIcon icon={faCartShopping} />
//         <FontAwesomeIcon icon={faMagnifyingGlass} />
//         <FontAwesomeIcon icon={faUser} />

//         <ul style={{ listStyle: 'none', display: 'flex' }}>

//             <img src={Logo2} style={{ width: '80px', backgroundColor: "lightgreen" }} alt="Logo" img />

//             <img src={Logo} style={{ width: '80px', backgroundColor: "lightgreen" }} alt="Logo" img />

//             <img src={Logo3} style={{ width: '80px', backgroundColor: "lightgreen" }} alt="Logo" img />

//             {NavegationBar.map(sec => {

//                 return <li key={sec.id}>{sec.name}  </li>
//             })}



//         </ul>


//     </nav> 
//  </header>