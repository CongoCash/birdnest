import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Col, Row} from 'react-bootstrap';
import './NavbarTop.css';

class NavbarTop extends Component {
  render() {
    return (
      <Row className="fixed-nav">
        <Col id="nav-col" sm={12}>
          <Navbar className="nav-height" collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand"><img src="https://thebirdnest.co/wp-content/uploads/2018/06/logo06172018.png" /></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  <h4 className="nav-color">Spaces</h4>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  <h4 className="nav-color">How It Works</h4>
                </NavItem>
                <NavItem eventKey={1} href="#">
                  <h4 className="nav-color">Our Story</h4>
                </NavItem>
                <NavItem eventKey={1} href="#">
                  <h4 className="nav-color">Login</h4>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  <h4 className="signup">Signup</h4>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default NavbarTop;
