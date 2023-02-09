import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const SideBar = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="nav-top">
      <Navbar variant="dark" key={expand} expand={expand}>
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <div className="nav-left">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
          <Button className="search-btn">
                🔍
              </Button>
            </Form>
            <div className="nav-right">
              <Nav.Link href="#home">DashBoard</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">pricing</Nav.Link>
            </div>
          </div>
          <Nav>
            <Navbar.Offcanvas
              //   id={`offcanvasNavbar-expand-${expand}`}
              className="side-bar"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="sb-side">
                  🤩SB Admin-2
                  <hr className="line-bar" />
                
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">DashBoard</Nav.Link>
                  <hr className="seperator-line" />
                  <Nav.Link href="#action1">
                    <h1 className="side-head">INTERFACE</h1>
                  </Nav.Link>
                  <h1 className="img-side">🖥️</h1>
                  <NavDropdown
                    className="side-contents"
                    title="Components"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <h5 className="font-head">CUSTOM COMPONENTS :</h5>
                    <NavDropdown.Item href="#action3">Buttons</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Cards</NavDropdown.Item>
                  </NavDropdown>
                  <h1 className="img-side">📂</h1>

                  <NavDropdown
                    className="side-page"
                    title="Utilities"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <h5 className="font-head"> CUSTOM UTILITIES :</h5>
                    <NavDropdown.Item href="#action3">Colors</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Borders</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Animations
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Other</NavDropdown.Item>
                  </NavDropdown>
                  <hr className="seperator-line" />
                  <Nav.Link href="#action1">
                    <h1 className="side-head">ADDONS</h1>
                  </Nav.Link>
                </Nav>
                <h1 className="img-size">📁</h1>
                <NavDropdown
                  className="side-page"
                  title="Pages"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <h5 className="font-head"> LOGIN SCREENS :</h5>
                  <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Register</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Forget Password
                  </NavDropdown.Item>
                  <h5 className="font-head"> Other Pages :</h5>
                  <NavDropdown.Item href="#action4">404 page</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Bank Page</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#action3" className="side-cont">
                  <h1 className="img-size">📈</h1>Charts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3" className="side-cont">
                  <h1 className="img-size">▤</h1>
                  Tables
                </NavDropdown.Item>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default SideBar;
