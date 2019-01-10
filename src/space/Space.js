import React, { Component } from 'react';
import {Thumbnail, Button, Col, Row, Carousel} from 'react-bootstrap';
import SpaceCarousel from '../space-carousel/SpaceCarousel.js';
import './Space.css';

class Space extends Component {

  render() {
    let officeImg = [
      ["https://thebirdnest.co/wp-content/uploads/2018/11/DSC01498-1024x683.jpg", "https://thebirdnest.co/wp-content/uploads/2018/11/DSC01500-768x512.jpg",
      "https://thebirdnest.co/wp-content/uploads/2018/11/DSC01504-768x512.jpg", "https://thebirdnest.co/wp-content/uploads/2018/11/DSC01514-768x512.jpg",
      "https://thebirdnest.co/wp-content/uploads/2018/11/DSC01516-768x512.jpg", "https://thebirdnest.co/wp-content/uploads/2018/11/DSC01520-768x512.jpg",
      "https://thebirdnest.co/wp-content/uploads/2018/11/DSC01523-768x512.jpg", "https://thebirdnest.co/wp-content/uploads/2018/11/DSC01531-768x512.jpg",
      "https://thebirdnest.co/wp-content/uploads/2018/11/DSC01537-768x512.jpg",
      "https://thebirdnest.co/wp-content/uploads/2018/11/870-Market-Street-Suite-867_869_2-768x543.png"],
      [
        "https://thebirdnest.co/wp-content/uploads/2018/11/49-Kearny-Floor-8_v2-768x543.png",
        "https://thebirdnest.co/wp-content/uploads/2018/11/7th-Fl-9-768x576.jpg"
      ],
      [
        "https://thebirdnest.co/wp-content/uploads/2018/08/Brannan-320b-01.jpg", "https://thebirdnest.co/wp-content/uploads/2018/08/Brannan-320b-02-768x512.jpg",
        "https://thebirdnest.co/wp-content/uploads/2018/08/Brannan-320b-03-768x512.jpg", "https://thebirdnest.co/wp-content/uploads/2018/08/Brannan-320b-04-768x512.jpg",
        "https://thebirdnest.co/wp-content/uploads/2018/08/Brannan-320b-layout-768x512.jpg", "https://thebirdnest.co/wp-content/uploads/2018/08/Brannan-building-3-768x512.jpg",
        "https://thebirdnest.co/wp-content/uploads/2018/08/Brannan-common-area-3-768x512.jpg", "https://thebirdnest.co/wp-content/uploads/2018/08/Brannan-conference-room-3-768x512.jpg",
        "https://thebirdnest.co/wp-content/uploads/2018/08/Brannan-south-park-3-768x512.jpg"
      ]
    ];
    let desc = [["870 Market St #867/869", "870 Market St #867/869, San Francisco, CA", "$3730/year", "January 1, 2019"],
      ["49 Kearny St Floor 8", "49 Kearny St Floor 8, San Francisco, CA", "$7490/year", "January 1, 2019"],
      ["350 Brannan St #320B", "350 Brannan St #320B, San Francisco, CA", "$2250/year", "January 1, 2019"]
    ];

    let carousels = desc.map((description, index) => {
      if (desc[index+1] && index%2 === 0) {
        return (
          <Row>
            <Col sm={6} >
              <SpaceCarousel images={officeImg[index]} desc={desc[index]}/>
            </Col>
            <Col sm={6} >
              <SpaceCarousel images={officeImg[index+1]} desc={desc[index+1]}/>
            </Col>
          </Row>
        )
      }
      else if (index%2 === 0 && !desc[index+1])
      return (
        <Row>
          <Col sm={6} >
            <SpaceCarousel images={officeImg[index]} desc={desc[index]}/>
          </Col>
        </Row>
      )
    });
    console.log(carousels.length);

    return (
      <React.Fragment>
        {carousels}
      </React.Fragment>
    );
  }
}

export default Space;
