import "./Header.scss";
// import Banner from '../Banner/Banner';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <Navbar
      key="lg"
      expand="lg"
      className="navbar mb-5 rounded-bottom p-3 w-100"
    >
      <Row className="w-100">
        <Col lg={12} md={10} sm={10} xs={10} className="d-flex">
          <img src={logo} alt="Logo Writer Talent" className="logo" />
          <Navbar.Brand href="#" className="flex-fill text-center">
            <h1 className="text-center d-inline-block p-2 rounded-3 m-0">
              WriterTalent
            </h1>
          </Navbar.Brand>
        </Col>

        <Col lg={12} md={2} sm={2} xs={2} className="d-flex">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className="nav-item"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton className="">
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="col-lg-12">
              <Nav className="w-100 d-flex justify-content-between mt-4">
                <Nav.Link href="#action1" className="nav-item">
                  Accueil
                </Nav.Link>
                <Nav.Link href="#action2" className="nav-item">
                  Charte du site
                </Nav.Link>
                <Nav.Link href="#action3" className="nav-item">
                  Nouveautés
                </Nav.Link>
                <NavDropdown
                  title="Genre"
                  id="offcanvasNavbarDropdown-expand-lg"
                  className="nav-item"
                >
                  <NavDropdown.Item href="#action4">Roman</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Conte</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Théâtre</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Univers"
                  id="offcanvasNavbarDropdown-expand-lg"
                  className="nav-item"
                >
                  <NavDropdown.Item href="#action7">Aventure</NavDropdown.Item>
                  <NavDropdown.Item href="#action8">SF</NavDropdown.Item>
                  <NavDropdown.Item href="#action9">Policier</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action10" className="nav-item">
                  Auteur
                </Nav.Link>
                <Nav.Link href="#action13" className="nav-item">
                  Profil
                </Nav.Link>
                <Nav.Link href="#action14" className="nav-item">
                  Se connecter
                </Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Rechercher"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Rechercher</Button>
                  </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Col>
      </Row>
    </Navbar>
  );
}
export default Header;
