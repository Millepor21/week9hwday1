import { Navbar, Nav} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <>
      <Navbar expand="lg" sticky="top" bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Medical Database Inc.</Navbar.Brand></Container>
          <Nav className="ml-auto">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
      </Navbar>
    </>
  );
}
