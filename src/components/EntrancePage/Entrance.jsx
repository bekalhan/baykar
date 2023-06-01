import React from 'react';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import News from './news/News';
import Plane from './Plane/Plane';
import Slider from './Slide/Slider';

const Top = () => {
  return (
    <div style={{backgroundColor: "#132143"    }}>
        <Home />
        <News />
        <Slider />
        <Plane />
        <Footer />
    </div>
  )
}

export default Top