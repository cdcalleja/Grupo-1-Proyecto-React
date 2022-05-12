
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons"
import Logo from './img/Logo6.png'
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';
import Carrito from "./Carrito"
import { useEffect, useState } from "react"
import axios from "axios"


const NavBar = () => {

  const {theme, handleTheme} = useContext(ThemeContext);
  // const { text } = useContext(LanguajeContext)
 

  const styles = {
    fontSize: "15px",
    textTransform: "capitalize",
    fontFamily: "poppins, sans serif",
  }


  const [data, setData] = useState([])

  useEffect(() => {

    axios("http://localhost:4000/secundarias").then(res => {
      setData(res.data)
    })

  }, [])

  const [data2, setData2] = useState([])

  useEffect(() => {

    axios("http://localhost:4000/principales").then(res => {
      setData2(res.data)
    })

  }, [])




  // npm install -g json-server

  // instalar json server: npm install -g json-server
  // instalar axios -> package.json -> dependencies -> agregar axios - autoimportar - npm i
  // json-server --watch data.json --port 4000


  return (

    <div className={theme}>
    <Navbar className="shadow" sticky="top" collapseOnSelect expand="lg" bg="light" variant="light" style={{ borderRadius: "20px" }}>
      <Container className="d-flex p-2">
        {/* fijate aca de cambiarle el className a un fluid */}
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" style={{ width: "60px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" style={styles}>
            <NavDropdown title="Clothes" id="collasible-nav-dropdown" >
               {
                data.map((item, index) => {
                  return (
                    <NavDropdown.Item href="#action/3.1" key={index}>{item.section}</NavDropdown.Item>)
                })
              }
            </NavDropdown>
            {
              data2.map((item, index) => {
                return (
                  <Nav.Link className="mx-4" href="#accesories" key={index}>{item.section}</Nav.Link>
                )
              })
            }
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
            <Carrito/>
            <button onClick={handleTheme} style={{ backgroundColor: "transparent", border: "none", marginLeft:"50px"}}>
                    {theme === "light" ? (<FontAwesomeIcon className="icon" icon={faSun} />) :
                        (<FontAwesomeIcon className="icon" icon={faMoon} />)
                    }
                </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )

}

export default NavBar

