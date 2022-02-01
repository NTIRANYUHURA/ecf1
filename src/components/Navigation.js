import React from "react"
import logo from "../assets/logo.svg"
import { Nav, Container, Navbar } from 'react-bootstrap';
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import SocialLinks from "../constants/socialLinks";
const Navigation = () => {
  return<Navbar bg="black" expand="lg">
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="home">Accueil</Nav.Link>
        <Nav.Link href="gallerie">Gallerie</Nav.Link>
        <Nav.Link href="tarif">Tarifs et spécification</Nav.Link>
        <Nav.Link href="contact">Contact</Nav.Link>

      </Nav>
    </Navbar.Collapse>
   
  </Container>
</Navbar>
}


export default Navigation