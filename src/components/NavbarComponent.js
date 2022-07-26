import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Image} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from "./Home";
import Feed from "./Feed";
//const Logo = {uri: "C:\\Users\\55229\\Documents\\demithehomie's Google Drive\\IIIA VENTURE BUILDER\\DOMINUS\\Dominus---Web\\dmnsweb1\\src\\assets\\DMNS_LOGO_WHITE-removebg.png "}

export default class NavbarComp extends Component {
    render() {
        return (
        <Router>    
            <div>
               
        <Navbar variant="dark" bg="dark" expand="lg">
        <Container>
        <Navbar.Brand href="#home">
        <img
              src="https://i.ibb.co/8jXQd3Y/DMNS-LOGO-WHITE-removebg-cropped.png"
              width="178"
              height="60"
           
              className="d-inline-block align-top"
              alt=""
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/feed"}>Feed</Nav.Link>

            <NavDropdown title="Mais..." id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ajuda</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contato
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Parcerias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sobre Nós
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
      
            
</Router>         
        );
    }
}