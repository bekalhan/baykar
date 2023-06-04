import ts1 from '../../../assets/ts1.jpeg';
import ts2 from '../../../assets/ts2.jpeg';
import ts3 from '../../../assets/ts3.jpeg';
import ts4 from '../../../assets/ts4.jpeg';
import ts5 from '../../../assets/ts5.jpeg';
import Slider from "react-slick";
import './Tshirts.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {BsBasket} from 'react-icons/bs';


const Tshirts = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div className="tshirts">
      <Slider {...settings} className='mySlide12'>
        <div className="slideItem">
        <div className='basket'>
                <BsBasket />
          </div>
          <img src={ts1} />
          <div className="slideText">
            <span>Bayrak Akıncı Polo Yaka</span>
            <span>160,00 $</span>
          </div>
          <button>Ürün Detayı</button>
        </div>
        <div className="slideItem">
        <div className='basket'>
                  <BsBasket />
          </div>
          <img src={ts2} />
          <div className="slideText">
            <span>Bayrak Akıncı Beyaz Çocuk</span>
            <span>160,00 $</span>
          </div>
          <button>Ürün Detayı</button>
        </div>
        <div className="slideItem">
        <div className='basket'>
                  <BsBasket />
          </div>
          <img src={ts3} />
          <div className="slideText">
            <span>Cezeri Beyaz Yaka Çocuk Tişört</span>
            <span>160,00 $</span>
          </div>
          <button>Ürün Detayı</button>
        </div>
        <div className="slideItem">
        <div className='basket'>
                  <BsBasket />
          </div>
          <img src={ts4} />
          <div className="slideText">
            <span>Bayraktar TB2 Beyaz Çocuk Tişçrt</span>
            <span>160,00 $</span>
          </div>
          <button>Ürün Detayı</button>
        </div>
        <div className="slideItem">
        <div className='basket'>
                  <BsBasket />
          </div>
          <img src={ts5} />
          <div className="slideText">
            <span>Bayrak Akıncı Siyah Çocuk</span>
            <span>160,00 $</span>
          </div>
          <button>Ürün Detayı</button>
        </div>
      </Slider>
    </div>
  )
}

export default Tshirts