import { Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import img8 from "../Descanso/img/descansito2.jpg";
// import ThemeContext from '../../context/ThemeContext';



const Descanso2 = () => {

    // const {theme} = useContext(ThemeContext)


    const estilos = {
        width: "100%",
        height: "395px",
        position: "cover"

    }

    const estilos2 = {
        fontFamily: "Cormorant, sans serif",
        fontWeight: "700",
        fontSize: "40px",
        lineHeight: "48px",
    }

    const boton = {
        width: "330px",
        height: "45px"
    }

    return (

        <div>
            <Card>
                <Card.Img className="md-block" variant="top" src={img8} style={estilos} />
                <Card.ImgOverlay style={{ background: "none" }}>
                    <div  style={{textAlign: "center", background: "none"}}>
                        <Card.Text style={estilos2}>
                            Tenemos mas ofertas para vos
                        </Card.Text>
                        <Card.Text style={estilos2}>Haz click en ver ofertas</Card.Text>
                        <Button className="mx-auto" variant="primary" style={boton}>Ver Ofertas</Button>
                    </div>

                </Card.ImgOverlay>
            </Card>
        </div>
    )
}


export default Descanso2;