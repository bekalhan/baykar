import React from 'react'
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

const Career = () => {
  return (
    <div className={css.career}>
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
    </div>
  )
}

export default Career