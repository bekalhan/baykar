import React from 'react'
import Banner from './Banner/Banner'
import Categories from './Categories/Categories'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import Header from './Header/Header'
import Introduce from './Introduce/Introduce'
import TopProducts from './TopProducts/TopProducts';
import css from './Store.module.css';

const Store = () => {
  return (
    <div className={css.store}>
        <Header />
        <Introduce />
        <Categories />
        <TopProducts />
        <FeaturedProducts />
        <Banner />
    </div>
  )
}

export default Store