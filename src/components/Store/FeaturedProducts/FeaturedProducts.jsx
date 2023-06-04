import React from 'react';
import fea1 from '../../../assets/fea1.jpeg';
import fea2 from '../../../assets/fea2.jpeg';
import fea3 from '../../../assets/fea3.png';
import fea4 from '../../../assets/fea4.jpeg';
import fea5 from '../../../assets/fea5.jpeg';
import fea6 from '../../../assets/fea6.jpeg';
import {BsBasket3} from 'react-icons/bs';
import css from './FeaturedProducts.module.css';


const FeaturedProducts = () => {

  return (
    <div className={css.container}>
        <div className={css.featured}>
        <div className={css.header}>
            <span>Öne Çıkan Ürünler</span>
        </div>
        <div className={css.products}>
            <div className={css.item}>
                <div className={css.basket}>
                  <BsBasket3 />
                </div>
                <img src={fea4} />
                <div className={css.text}>
                    <span>
                        KIZILELMA Buton Rozet
                    </span>
                    <span>
                        20,00 $
                    </span>
                </div>
                <button>Ürün Detayı</button>
            </div>
            <div className={css.item}>
            <div className={css.basket}>
                  <BsBasket3 />
                </div>
                <img src={fea1} />
                <div className={css.text}>
                    <span>
                        TB2 Mat Rozet
                    </span>
                    <span>
                        60,00 $
                    </span>
                </div>
                <button>Ürün Detayı</button>

            </div>
            <div className={css.item}>
            <div className={css.basket}>
                  <BsBasket3 />
                </div>
                <img src={fea2} />
                <div className={css.text}>
                    <span>
                        Bayraktar Akıncı Ay Yıldız
                    </span>
                    <span>
                        60,00 $
                    </span>
                </div>
                <button>Ürün Detayı</button>
            </div>
            <div className={css.item}>
            <div className={css.basket}>
                  <BsBasket3 />
                </div>
                <img src={fea3} />
                <div className={css.text}>
                    <span>
                        1/48 Ölçek Bayraktar TB2 Maket
                    </span>
                    <span>
                        600,00 $
                    </span>
                </div>
                <button>Ürün Detayı</button>
            </div>
            <div className={css.item}>
                <div className={css.basket}>
                  <BsBasket3 />
                </div>
                <img src={fea6} />
                <div className={css.text}>
                    <span>
                        Türkçe Yeşil Bayraktar
                    </span>
                    <span>
                        25,00 $
                    </span>
                </div>
                <button>Ürün Detayı</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProducts