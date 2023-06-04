import React from 'react';
import top1 from '../../../assets/top1.png';
import top2 from '../../../assets/top2.png';
import top3 from '../../../assets/top3.png';
import top4 from '../../../assets/top4.png';
import css from './TopProducts.module.css';
import {BsBasket3} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';

const TopProducts = () => {
  return (
    <div className={css.container}>
        <div className={css.topProducts}>
        <div className={css.header}>
            <span>Çok Satanlar</span>
        </div>
        <div className={css.products}>
            <div className={css.item}>
                <div className={css.basket}>
                  <BsBasket3 />
                </div>
                <img src={top1} />
                <div className={css.text}>
                    <span>
                        1/32 Ölçek Bayraktar TB2 Maket
                    </span>
                    <span>
                        1250,00 $
                    </span>
                </div>
                <button>Ürün Detayı</button>
            </div>
            <div className={css.item}>
            <div className={css.basket}>
                  <BsBasket3 />
                </div>
                <img src={top2} />
                <div className={css.text}>
                    <span>
                        1/32 Ölçek Bayraktar Akıncı Maket
                    </span>
                    <span>
                        1750,00 $
                    </span>
                </div>
                <button>Ürün Detayı</button>

            </div>
            <div className={css.item}>
            <div className={css.basket}>
                  <BsBasket3 />
                </div>
                <img src={top3} />
                <div className={css.text}>
                    <span>
                        1/72 Ölçek Bayraktar Akıncı Maket
                    </span>
                    <span>
                        800,00 $
                    </span>
                </div>
                <button>Ürün Detayı</button>
            </div>
            <div className={css.item}>
            <div className={css.basket}>
                  <BsBasket3 />
                </div>
                <img src={top4} />
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
        </div>
        </div>
    </div>
  )
}

export default TopProducts