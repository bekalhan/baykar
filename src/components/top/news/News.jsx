import React from 'react';
import Cards from './Cards/Cards';
import Twitter from './Twitter/Twitter';

import css from './News.module.css';

const News = () => {
  return (
  <div className={css.container}>
    <div className={css.news}>
          <Cards />
          <div></div>
          <Twitter />
    </div>
  </div>

  )
}

export default News