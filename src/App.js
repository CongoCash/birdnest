import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import NavbarTop from './navbar-top/NavbarTop.js';
import SpaceForm from './space-form/SpaceForm.js';
import Space from './space/Space.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid fluid>
          <NavbarTop />
          <Row className="margin-top85">
            <Col sm={7}>
              <SpaceForm/>
              <Space />
            </Col>
            <Col sm={5}>
              <img className="map" src="https://i.imgur.com/OkNjxRC.png"/>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
