import React from 'react'
import {AiOutlineStar} from 'react-icons/ai';
import css from './Banner.module.css';

const Banner = () => {
  return (
    <div className={css.banner}>
        <div className={css.text}>
            <span>
                <AiOutlineStar />
                BAYRAKTAR AKINCI
                <AiOutlineStar />
            </span>
            <span>Maket Modelleri</span>
            <button>İNCELE</button>
        </div>
    </div>
  )
}

export default Banner