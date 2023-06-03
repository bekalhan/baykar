import css from './Social.module.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Social.css'

//images
import social from '../../../assets/social1.jpeg';
import social2 from '../../../assets/social2.jpeg';
import social3 from '../../../assets/social3.jpeg';
import social4 from '../../../assets/social4.jpeg';
import social5 from '../../../assets/social5.jpeg';

import {BiPlus} from 'react-icons/bi';


const Social = () => {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 100,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className={css.social}>
        <div className={css.header}>
            <span>SOSYAL ALANLAR</span>
        </div>
        <Slider {...settings} className='mySlide5'>
            <div>
              <img src={social} />
              <div className="Icon">
                <BiPlus />
              </div>
            </div>
            <div>
              <img src={social2} />
              <div className="Icon">
                <BiPlus />
              </div>
            </div>
            <div>
              <img src={social3} />
              <div className="Icon">
                <BiPlus />
              </div>
            </div>
            <div>
                <img src={social4} />
                <div className="Icon">
                <BiPlus />
              </div>
            </div>
            <div>
                <img src={social5} />
                <div className="Icon">
                <BiPlus />
              </div>
            </div>
      </Slider>
    </div>
  )
}

export default Social