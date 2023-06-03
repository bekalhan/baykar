import React from 'react';
import Slider from "react-slick";
import {motion} from 'framer-motion';
import './Slider.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//images
import slide1 from '../../../assets/slide1.jpeg';
import slide2 from '../../../assets/slide2.jpeg';
import slide3 from '../../../assets/slide3.jpeg';
import slide4 from '../../../assets/slide4.jpeg';
import slide5 from '../../../assets/slide5.jpeg';


const SliderComponent = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className="slider-component">
        <Slider {...settings} className="mySlider2">
                <div className="slideent">
                    <img src={slide1} title="asd" />
                </div>
                <div className="slideent">
                    <img src={slide2} />
                </div>
                <div className="slideent">
                    <img src={slide3} />
                </div>
                <div className="slideent">
                    <img src={slide4} />
                </div>
                <div className="slideent">
                    <img src={slide5} />
                </div>
        </Slider>
    </div>
  )
}

export default SliderComponent;