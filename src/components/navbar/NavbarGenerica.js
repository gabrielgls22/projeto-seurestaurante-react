import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavBarGenerica({ nomeEmpresa, nomeEmpresaLink, urlLogoEmpresa }) {
  return (
    <Navbar bg="bg-transparent" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={urlLogoEmpresa}
            width="70"
            height="45"
            className="d-inline-block align-top"
            style={{ marginRight: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              {nomeEmpresa}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href={`/pedidos/${nomeEmpresaLink}`}>
                Consultar Pedidos
              </Nav.Link>
              <Nav.Link href={`/cardapio/${nomeEmpresaLink}`}>
                Cardápio
              </Nav.Link>
              <Nav.Link href={`/fila/${nomeEmpresaLink}`}>Fila</Nav.Link>
              <Nav.Link href="{`/agendamento/${nomeEmpresaLink}`}">
                Agendamento
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBarGenerica;
