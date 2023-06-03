import React from 'react';
import Slider from "react-slick";
import {AiOutlineRight} from 'react-icons/ai';
import {motion} from 'framer-motion';


//import css
import './Home.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../../../assets/kslide1.png';
import slide2 from '../../../assets/kslide3.png';
import slide3 from '../../../assets/kslide4.png';
import slide4 from '../../../assets/kslide5.png';


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
          x: direction === "left" ? 400 : direction === "right" ? -300 : 0,
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
    className="career-home">
        <Slider {...settings} className='mySlider3'>
          <div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
          className='slide'>
            <div></div>
            <motion.div 
            className="desc">
              <motion.span
              variants={fadeIn("right", "tween", (0+1)*0.2, 1)} 
              >SAHA PROJE YÖNETİCİSİ</motion.span>  
              <span>Projelerin, Planlama, Koordinasyon, Eğitim, Teslimat, Kurulum, Garanti, Teknik Destek vb. süreçlerin icrası ve takibi</span>
              <motion.button
              variants={fadeIn("up", "tween", 0.3, 1)}
              className='btn'>
                <AiOutlineRight />
                DETAY
             </motion.button>
            </motion.div>
            <motion.img
            variants={fadeIn("left", "tween", (0+1)*0.2, 1)} 
            src={slide1} />
            <div></div>
          </div>
          <div
          className='slide'>
            <div></div>
            <motion.div 
            className="desc">
              <motion.span
              variants={fadeIn("right", "tween", (0+1)*0.2, 1)} 
              >Saha Personeli (Elektronik / Aviyonik)</motion.span>  
              <motion.button
              variants={fadeIn("up", "tween", 0.3, 1)}
              className='btn'>
                <AiOutlineRight />
                DETAY
             </motion.button>
            </motion.div>
            <motion.img
            variants={fadeIn("left", "tween", (0+1)*0.2, 1)} 
            src={slide2} />
            <div></div>
          </div>
          <div
          className='slide'>
            <div></div>
            <motion.div 
            className="desc">
              <motion.span
              variants={fadeIn("right", "tween", (0+1)*0.2, 1)} 
              >RF ve Mikrodalga Sistem Tasarım Mühendisi</motion.span>  
              <motion.button
              variants={fadeIn("up", "tween", 0.3, 1)}
              className='btn'>
                <AiOutlineRight />
                DETAY
             </motion.button>
            </motion.div>
            <motion.img
            variants={fadeIn("left", "tween", (0+1)*0.2, 1)} 
            src={slide3} />
            <div></div>
          </div>
          <div
          className='slide'>
            <div></div>
            <motion.div 
            className="desc">
              <motion.span
              variants={fadeIn("right", "tween", (0+1)*0.2, 1)} 
              >Yapay Zeka Yazılım Mühendisi</motion.span>  
              <span>Akıllı sistemler geliştirerek, savunma ve havacılık sektöründe yeni teknolojiler üretmek</span>
              <motion.button
              variants={fadeIn("up", "tween", 0.3, 1)}
              className='btn'>
                <AiOutlineRight />
                DETAY
             </motion.button>
            </motion.div>
            <motion.img
            variants={fadeIn("left", "tween", (0+1)*0.2, 1)} 
            src={slide4} />
            <div></div>
          </div>
        </Slider>
    </motion.div>
  )
}

export default Home