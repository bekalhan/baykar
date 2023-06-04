import React from 'react';
import giyim from '../../../assets/giyim.jpeg';
import maketler from '../../../assets/maketler.jpeg';
import aksesuarlar from '../../../assets/aksesuarlar.jpeg';
import css from './Categories.module.css';

const Categories = () => {
  return (
    <div className={css.container}>
        <div className={css.categories}>
            <div className={css.header}>
                <span>KATEGORİLER</span>
            </div>
            <div className={css.images}>
                <div className={css.item}>
                      <img src={giyim} />
                      <button>GİYİM</button>
                </div>
                <div className={css.item}>
                      <img src={maketler} />
                      <button>GİYİM</button>
                </div>
                <div className={css.item}>
                      <img src={aksesuarlar} />
                      <button>GİYİM</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories