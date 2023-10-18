import { Navbar, Nav} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <>
      <Navbar expand="lg" sticky="top" bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Medical Database Inc.</Navbar.Brand></Container>
          { localStorage.length === 1 ?
          <Nav className="ml-auto">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/register/patient">Register Patient</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/login/patient">Patient Login</Nav.Link>
            </Nav.Item>
          </Nav> :
          <Nav.Item>
            <Nav.Link as={NavLink} to='/logout'>Logout</Nav.Link>
          </Nav.Item>
          }
      </Navbar>
    </>
  );
}
