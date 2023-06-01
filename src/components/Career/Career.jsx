import React from 'react'
import Header from './Header/Header'
import Home from './Home/Home';
import css from './Career.module.css';

const Career = () => {
  return (
    <div className={css.career}>
        <Header />
        <Home />
    </div>
  )
}

export default Career