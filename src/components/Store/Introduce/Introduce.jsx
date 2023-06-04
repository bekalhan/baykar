import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Introduce.css';

import {GrShieldSecurity} from 'react-icons/gr';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {GiCargoShip} from 'react-icons/gi';


const Introduce = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
      };
  return (
    <div className="introduce">
        <Slider {...settings} className='mySlide10'>
           <div className='slide1'>
                <div className="text">
                    <span>BAYRAKTAR AKINCI</span>
                        <span>MAKET MODELLERİ</span>
                        <button>İNCELE</button>
                </div>
            </div>
            <div className='slide1 slide2'>
                <div className="text">
                        <span></span>
                        <span>TİŞÖRT MODELLERİ</span>
                        <button>İNCELE</button>
                </div>
            </div>
            <div className='slide1 slide3'>
                <div className="text">
                    <span>BAYRAKTAR TB2</span>
                    <span>MAKET MODELLERİ</span>
                    <button>İNCELE</button>
                </div>
            </div>
        </Slider>
        <div className="Icons">
            <div className="icon">
                <GrShieldSecurity />
                <div className="icon-text">
                    <span>GÜVENLİ ALIŞVERİŞ</span>
                    <span>3d Sanal Pos Hizmeti</span>
                </div>
            </div>
            <div className="icon">
                <RiCustomerService2Fill />
                <div className="icon-text">
                    <span>MÜŞTERİ HİZMETLERİ</span>
                    <span>Telefon ve Mail Erişimi</span>
                </div>
            </div>
            <div className="icon">
                <GiCargoShip />
                <div className="icon-text">
                    <span>HIZLI KARGO</span>
                    <span>Yurtiçi Kargo</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduce