import React from 'react';
import Slider from "react-slick";
import {motion} from 'framer-motion';
import akinci from '../../../assets/akincii.png';
import {AiOutlineArrowRight} from 'react-icons/ai';
import bayraktar from '../../../assets/bayraktar.png';
import sky from '../../../assets/goklerde.mp4';

//import data
import {bayraktarDotsData,akinciDotsData} from '../../../data/dots';

//import css
import './Home.css';

//import module.css
import css from './Home.module.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from '../Header/Header';

const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
  const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

//soldan sağa veya sağdan sola gecikmeli veya gecikmesiz
const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
        stiffness: 600,
      },
    },
  });

const appear = (delay,duration) => ({
  hidden:{
    opacity:0,
    scale:0
  },
  show:{
    opacity:1,
    scale:[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
    transition: {
      type: "spring",
      stiffness: 200,
      delay: delay,
      duration:duration
    },
    whileHover:{
      backgroundColor:"transparent"
    }
  }
})

    //alttan üste üstten alta sağddan sola soldan sağa slide verir
  const slideIn = (direction, type, delay, duration) => ({
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "-1000" : direction === "down" ? "-200" : 0,
        opacity:0,
      },
      show: {
        x: 0,
        y: 0,
        opacity:1,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut",
          scale:[0.8,1,1.2],
        },
      },
    });


  return (
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={css.home}>
      <Header />
      <Slider
        className='mySlider' {...settings}>
      <div className='slide1'>
        <div className="video">
        <video src={sky} autoPlay muted loop />
        </div>
       </div>
       <motion.div 
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.25 }}
           className='slide2'>
      <motion.img 
        variants={appear(2, 4)} 
        src={bayraktar} />
        <motion.div
        variants={fadeIn("right", "tween", (0+4)*0.2, 1)} 
        className="info-slide">
          <span>Bayraktar TB2</span>
        </motion.div>
            {bayraktarDotsData?.map((el)=>(
              <motion.div
              variants={slideIn("up", "tween", (11+el?.index)*0.2, 0.4)} 
              className='tooltipDot'
              style={{left:`${el?.left}%`,top:`${el?.top}%`}}
              >
                  <span class="tooltiptext">{el?.desc}</span>
              </motion.div>
            ))}
        <motion.button
        className={css.btn}
        variants={fadeIn("right", "tween", (0+2)*0.2, 1)}
        >
          Detaylar <AiOutlineArrowRight /></motion.button>
       </motion.div>
       <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
       className='slide3'>
          <motion.img 
          variants={appear(2, 4)} 
        src={akinci} />
        <motion.div
        variants={fadeIn("right", "tween", (0+4)*0.2, 1)} 
        className="info-slide">
          <span>Bayraktar AKINCI</span>
        </motion.div>
        {akinciDotsData?.map((el)=>(
              <motion.div
              variants={slideIn("up", "tween", (11+el?.index)*0.2, 0.4)} 
              className='tooltipDot'
              style={{left:`${el?.left}%`,top:`${el?.top}%`}}
              >
                  <span class="tooltiptext">{el?.desc}</span>
              </motion.div>
            ))}
        <motion.button
        className={css.btn}
        variants={fadeIn("right", "tween", (0+2)*0.2, 1)} 
        >Detaylar <AiOutlineArrowRight /></motion.button>
       </motion.div>
    </Slider>
    </motion.div>

  )
}

export default Home