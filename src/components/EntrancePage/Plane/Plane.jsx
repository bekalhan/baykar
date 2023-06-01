import React from 'react';
import ReactCompareImage from 'react-compare-image';
import css from './Plane.module.css';
import before from '../../../assets/plane1.png';
import after from '../../../assets/plane2.png';


const Plane = () => {
  return (
    <div className={css.virtual}>
        <div className={css.virtualText}>
            <span>SINIRLARI ZORLUYORUZ</span>
            <span>Dünden bugüne tüm gücümüzle milli mücadeleye katkı sunmanın gururunu yaşıyoruz</span>
        </div>
        <div className={css.wrapper}>
            <ReactCompareImage leftImage={after}
            rightImage={before}
            />    
        </div>
        <div className={css.buttons}>
            <button>Tedarik</button>
            <button>Müşteri</button>
        </div>
    </div>
  )
}

export default Plane