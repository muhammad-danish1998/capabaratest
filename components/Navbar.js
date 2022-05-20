import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
import Link from 'next/link'
const MainNavbar = () => {
  return (
    <div>
      <Navbar

        expand="lg"
        className="position-fixed w-100 navbarMain "
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="/images/logoimg.png"
              alt="Picture of the author"
              width={92}
              height={73}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ margin: "0 auto" }}>
            <Link href="/" passHref>

              <Nav.Link href="#home" className="navbarItems active">Home</Nav.Link>
              </Link>
              <Nav.Link  className="navbarItems">Why Capabara</Nav.Link>
              <Nav.Link  className="navbarItems">Features</Nav.Link>
              <Link href="/template" passHref>
                <Nav.Link className="navbarItems">Templates</Nav.Link>

              </Link>

              <Nav.Link  className="navbarItems">Pricing</Nav.Link>
              <Link href="/contact" passHref>

                <Nav.Link className="navbarItems">Contact Us</Nav.Link>
              </Link>

            </Nav>

            <Nav className="ms-auto">
              <Button
                variant="outline-secondary"
                style={{ marginRight: "10px" }}
                className="loginbtn"
              >
                Log In
              </Button>{" "}
              <Button variant="outline-secondary" className="signupbtn">Sign Up</Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
