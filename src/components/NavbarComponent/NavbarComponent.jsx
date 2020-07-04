import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarComponent = () => {
    return <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">DemagogScrapper</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <NavDropdown title="Rankings" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/topList/coalitions">Coalitions</NavDropdown.Item>
          <NavDropdown.Item href="/topList/parties">Parties</NavDropdown.Item>
          <NavDropdown.Item href="/topList/members">Politicians</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/coalitions">Coalitions</Nav.Link>
        <Nav.Link eventKey={2} href="/parties">Parties</Nav.Link>
        <Nav.Link eventKey={2} href="/members">Politicians</Nav.Link>
        <Nav.Link href = "https://demagog.org.pl/" target = "_blank">Visit Source</Nav.Link>        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default NavbarComponent;