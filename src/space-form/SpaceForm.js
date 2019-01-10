import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Checkbox, Button, Col, Row} from 'react-bootstrap';
import './SpaceForm.css';

class SpaceForm extends Component {

  render() {
    return (
      <React.Fragment>
        <Form horizontal>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Size (SqFt)
            </Col>
            <Col sm={9}>
              <FormControl componentClass="select" placeholder="select">
                <option value="Any">Any</option>
                <option value="0-500">0-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1001-1500">1001-1500</option>
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Neighborhood
            </Col>
            <Col sm={9}>
              <FormControl componentClass="select" placeholder="San Francisco">
                <option value="San Francisco">San Francisco</option>
                <option value="Mid-Market">&nbsp;&nbsp;&nbsp;Mid-Market</option>
                <option value="SOMA">&nbsp;&nbsp;&nbsp;SOMA</option>
                <option value="Union Square">&nbsp;&nbsp;&nbsp;Union Square</option>
                <option value="FiDi">&nbsp;&nbsp;&nbsp;FiDi</option>
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col className="align-left" componentClass={ControlLabel} sm={9}>
              <ControlLabel className="result-found">15 Results Found (Showing 1-15)</ControlLabel>
            </Col>
            <Col sm={3}>
              <FormControl componentClass="select">
                <option value="Mid-Market">Sort By</option>
                <option value="SOMA">Title (A-Z)</option>
                <option value="Union Square">Title (Z-A)</option>
                <option value="FiDi">Date (Newest)</option>
                <option value="FiDi">Date (Oldest)</option>
              </FormControl>
            </Col>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export default SpaceForm;
