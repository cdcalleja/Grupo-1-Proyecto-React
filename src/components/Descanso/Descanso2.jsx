import { Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import img8 from "../Descanso/img/descansito2.jpg";
import ThemeContext from '../../context/ThemeContext';
import "./descanso2.css";


const Descanso2 = () => {

    const {theme} = useContext(ThemeContext)


    const estilos = {
        width: "100%",
        height: "395px",
        position: "cover"

    }

    const estilos2 = {
        fontFamily: "cursive",
        fontWeight: "300",
        fontSize: "40px",
        lineHeight: "48px",
    }

    

    return (

        <div className={theme}>
            <Card>
                <Card.Img className="md-block" variant="top" src={img8} style={estilos} />
                <Card.ImgOverlay style={{ background: "none" }}>
                    <div  style={{textAlign: "center", background: "none"}}>
                        <Card.Text style={estilos2}>
                            Tenemos mas ofertas para vos
                        </Card.Text>
                        <Card.Text style={estilos2}>Haz click en ver ofertas</Card.Text>
                        <a href="#productos">
                        <Button className="boton" style={{backgroundColor: "orange"}} >Ver Ofertas</Button>
                        </a>
                    </div>

                </Card.ImgOverlay>
            </Card>
        </div>
    )
}


export default Descanso2;