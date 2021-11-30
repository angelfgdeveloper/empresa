import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import {Row, Form, Col} from 'react-bootstrap';
import {Divider} from '@mui/material';
import CardsReferenciasMini from '../components/CardsReferenciasMini';
import CardsRefRecibidas from '../components/CardsRefRecibidas';

const cards = [
  {
    Nombre: 'Juan Lopez',
    Area: 'Contador',
    Experiencia:'2 Años',
    id:1,
   
  },
  {
    Nombre: 'Pedro Paramo',
    Area: 'Desarrollador de Software',
    Experiencia:'6 meses',
    id:2,
  }
];

const cardsRec = [
  {
    Nombre: 'Juan Lopez',
    Imagen: 'Usuario.jpg',
    id:1,
   
  },
  {
    Nombre: 'Pedro Paramo',
    Imagen:'Usuario.jpg',
    id:2,
  }
];
    function Referencias() {
    return(
        <div className="App">
         <header>
                <Navbar collapseOnSelect expand="lg" className="BarraEm">
                    <Container>
                        <Navbar.Brand href="/Empresas">
                            <img
                                alt=""
                                src="logo512.png"
                                
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Nombre de la empresa
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/Datos">Datos de la Empresa
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Vacante">Publicar vacante</Nav.Link>
                                <Nav.Link href="/Solicitudes">Evaluaciones
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Referencias">Referencias
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Estudios">
                                    Estudios
                                    <Badge bg="danger">1</Badge></Nav.Link>
                            </Nav>
                            <Nav>
                                <Navbar.Brand className="UsuarioImg">
                                    <img
                                        alt=""
                                        src="perfil.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                                <NavDropdown title="Perfil" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/">Cerrar Sesion</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <div className="ContenedorEmpresas">
            <h4> Escritorio Virtual</h4>
            <Divider/>
                <Row className="MargenL" >
                <Form.Group as={Col} md="4">
                        <h6>Candidato activo </h6>
                
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6>Area de especialidad</h6>
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6>Años de experiancia</h6>
                </Form.Group>
                </Row>
                <div className="MarginB">
                {cards.map((post) => (
                  <CardsReferenciasMini key={post.id} post={post} />
                ))}
                </div>
              <Divider/>
              <h4>Referencias recibidas</h4>
              <div className="DivRefRec">
              {cardsRec.map((post) => (
                  <CardsRefRecibidas key={post.id} post={post} />
                ))}
              </div>
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
              <Link
                display="block"
                variant="body1"
                href="#"
                name="GitHub"
                sx={{ mb: 0.5 }}
              >
                <GitHubIcon name='GitHub'
                />
                <span>GitHub</span>
              </Link>
              <Link
                display="block"
                variant="body1"
                href="#"
                name="Facebook"
                sx={{ mb: 0.5 }}
              >
                <FacebookIcon name='Facebook'
                />
                <span>Facebook</span>
              </Link>
              <p>
                <Link
                  display="block"
                  variant="body1"
                  href="#"
                  name="Twitter"
                  sx={{ mb: 0.5 }}
                >
                  <TwitterIcon name='Twitter'
                  />
                  <span>Twitter</span>
                </Link>

                <Link
                  display="block"
                  variant="body1"
                  href="#"
                  name="Instagram"
                  sx={{ mb: 0.5 }}
                >
                  <Instagram name='Instagram'
                  />
                  <span>Instagram</span>
                </Link>
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

export default Referencias;