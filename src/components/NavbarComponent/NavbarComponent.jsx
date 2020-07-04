import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

const NavbarComponent = () => {
    return <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>DemagogScrapper</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <NavDropdown title="Rankings" id="collasible-nav-dropdown">
          <NavDropdown.Item as ={Link} to="/topList/coalitions">Coalitions</NavDropdown.Item>
          <NavDropdown.Item as ={Link} to="/topList/parties">Parties</NavDropdown.Item>
          <NavDropdown.Item as ={Link} to="/topList/members">Politicians</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  as ={Link} to="/coalitions">Coalitions</Nav.Link>
        <Nav.Link eventKey={2} as ={Link} to="/parties">Parties</Nav.Link>
        <Nav.Link eventKey={2} as ={Link} to="/members">Members</Nav.Link>
        <Nav.Link href = "https://demagog.org.pl/" target = "_blank">Visit Source</Nav.Link>        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default NavbarComponent;