import React,{useState,useRef} from 'react'
import Header from './Header/Header'
import Home from './Home/Home';
import css from './Career.module.css';
import Positions from './Position/Positions';
import Statistics from './Statistics/Statistics';
import About from './About/About';
import Benefits from './Benefits/Benefits';
import Social from './SocialFields/Social';
import Description from './Description/Description';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import {Box} from '@mui/material';

const Career = () => {

  const [scrollTop, setScrollTop] = useState(0);

      //catch event for line
      const handleScroll = (event) => {
        console.log("eventaskldmalkdmaklsdmklasd");
        setScrollTop(event.currentTarget.scrollTop);
    }

    console.log("scroll , ",scrollTop);

  return (
    <Box sx={{overflow:'auto',height:'100%',display:'flex',flexDirection:'column',backgroundColor:'#f4f4f4'}} onScroll={handleScroll}>
        <Header />
        <Home />
        <Positions />
        <Statistics />
        <About />
        <Benefits />
        <Social />
        <Description />
        <Contact />
        <Footer />
    </Box>
  )
}

export default Career