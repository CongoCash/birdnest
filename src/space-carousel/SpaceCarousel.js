import React, { Component } from 'react';
import {Thumbnail, Button, Col, Row, Carousel} from 'react-bootstrap';
import './SpaceCarousel.css';

class SpaceCarousel extends Component {

  render() {
    let image, desc = ['', ''];
    if (this.props.images && this.props.desc) {
      desc = this.props.desc;
      image = this.props.images.map((image) => {
        return (
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={image} />
          </Carousel.Item>
        )
      });
    }
    return (
      <Thumbnail>
        <Carousel interval={null}>
          {image}
        </Carousel>
        <h3 className="space-title space-address">{desc[0]}</h3>
        <h5 className="space-address">{desc[1]}</h5>
        <Row>
          <Col sm={12}>
            <span className="starting-prices">Starting Prices:</span>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <h5 className="office-type">Private Office</h5>
          </Col>
          <Col sm={6}>
            <h5 className="office-price">{desc[2]}</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <h5 className="office-type">Available</h5>
          </Col>
          <Col sm={6}>
            <h5 className="office-price">{desc[3]}</h5>
          </Col>
        </Row>
      </Thumbnail>
    );
  }
}

export default SpaceCarousel;
