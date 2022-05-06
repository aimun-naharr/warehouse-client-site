import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from "../../../images/banner.jpg"
import bannerTwo from "../../../images/bannerTwo.jpg"
import bannerThree from "../../../images/bannerThree.jpg"
import "./FirstSection.css"
const FirstSection = () => {
    return (
        <div>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerTwo}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerThree}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default FirstSection;