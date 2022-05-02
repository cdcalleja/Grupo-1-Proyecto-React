import { Container, Row, Col, Card } from "react-bootstrap";
import { whyusDB } from "../../data/whyus";
import '../Detalles/details.css';
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';

const Details = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme} style={{paddingTop:"100px"}}>
            <Container className="contenedor" fluid >
                <Row className="sm-auto justify-content-md-center">
                    {
                        whyusDB.map((e, index) => (
                            <Col xs={12} md={4} lg={2} key={index}>
                                <Card className="text-center shadow m-2 m-md-1" style={{ boxSizing: "content-box" }} >
                                    <Card.Img className="w-50 mx-auto" variant="top" src={e.img} />
                                    <Card.Body>
                                        <Card.Title style={{ textDecoration: "underline" }} >{e.h5} </Card.Title>
                                        <Card.Text>
                                            {e.p}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};
export default Details