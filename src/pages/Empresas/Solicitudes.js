import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Button, Form, Row} from 'react-bootstrap';
import { Divider } from '@mui/material';

function Solicitudes() {
    return (

        <div className="App">
           
            <div className="ContenedorEmpresas">
            <h4> Escritorio Virtual</h4>
            <Divider/>
                <Row className="MargenL" >
                <Form.Group as={Col} md="4">
                        <h6>Evaluacíon Psicometrica </h6>
                
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6> Evaluacíon de Conocimientos</h6>
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6>Resultados</h6>
                </Form.Group>
                </Row>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes"></Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Crea tu Evaluación</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Pruebas Finalizadas</Button>{' '}
                    </Form.Group>
                </Row>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes" ></Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Evaluaciones Disponibles</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Ranking de Resultados</Button>{' '}
                    </Form.Group>
                </Row>
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes" ></Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" className="BtnSolicitudes">Volver al Inicio</Button>{' '}
                    </Form.Group>
                </Row>
            </div>

            <footer>
                <div className="Fcontainer">
                    <div className="row">
                        <div className="Fcol-md-4 footer-col">
                            <h4>Dirección</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Correo</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Redes Sociales</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Empresa</h4>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Solicitudes;

