import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for route matching
import "./Navbar.css";

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" expand="lg" className="navbar-custom p-4">
      <Container>
        <h1 className="text-white">Start React</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`text-white text-center fs-5 ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`text-white fs-5 text-center ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={`text-white text-center fs-5 ${
                location.pathname === "/portfolio" ? "active" : ""
              }`}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`text-white text-center fs-5 ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
