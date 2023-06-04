import css from './Header.module.css';
import logo from '../../../assets/Baykarmagaza.png';
import {AiFillCaretDown,AiOutlineSearch,AiOutlineMenu} from 'react-icons/ai';
import giyim from '../../../assets/giyim.jpeg';
import maketler from '../../../assets/maketler.jpeg';
import aksesuarlar from '../../../assets/aksesuarlar.jpeg';
import {MdOutlinePersonOutline} from 'react-icons/md';
import {BsBasket} from 'react-icons/bs';
import {AiFillCaretRight} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';
import { useState } from 'react';

const Header = () => {

    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

  return (
    <div className={css.header}>
        <div className={css.menuItem}>
            <AiOutlineMenu onClick={handleOpen} />
        </div>
        <div className={css.logo}>
            <img src={logo} />
        </div>
        <div className={css.menu}>
            <ul className={css.list}>
                <li>ANASAYFA</li>
                <li>
                    GİYİM
                    <AiFillCaretDown />
                    <div className={css.subMenu}>
                        <ul className={css.list}>
                            <li>Bayraktar Akıncı Tişört</li>
                            <li>Bayraktar TB2 Tişört</li>
                            <li>Cezeri Uçan Araba Tişört</li>
                            <li>Akıncı Beyaz Ekip Tişört</li>
                            <li>Çocuk Giyim</li>
                            <li>Mini İHA Tişört</li>
                        </ul>
                        <div className={css.image}>
                            <img src={giyim} />
                            <div className={css.hoverTitle}>
                                <span>GİYİM</span>
                                <span>alışveriş yap</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    MAKETLER
                    <AiFillCaretDown />
                    <div className={css.subMenu}>
                        <ul className={css.list}>
                            <li>Bayraktar Akıncı Tişört</li>
                            <li>Bayraktar TB2 Tişört</li>
                            <li>Cezeri Uçan Araba Tişört</li>
                            <li>Akıncı Beyaz Ekip Tişört</li>
                            <li>Çocuk Giyim</li>
                            <li>Mini İHA Tişört</li>
                        </ul>
                        <div className={css.image}>
                            <img src={maketler} />
                            <div className={css.hoverTitle}>
                                <span>GİYİM</span>
                                <span>alışveriş yap</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    AKSESUARLAR
                    <AiFillCaretDown />
                    <div className={css.subMenu}>
                        <ul className={css.list}>
                            <li>Kupa Bardak</li>
                            <li>Anahtarlıklar</li>
                            <li>Şapka & Fular</li>
                            <li>Buff</li>
                            <li>Rozet</li>
                            <li>Buton Rozer</li>
                            <li>Mouse Pad</li>

                        </ul>
                        <div className={css.image}>
                            <img src={aksesuarlar} />
                            <div className={css.hoverTitle}>
                                <span>AKSESUARLAR</span>
                                <span>alışveriş yap</span>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
        <div className={css.action}>
            <div className={css.search}>
                <AiOutlineSearch />
            </div>
            <span>|</span>
            <div className={css.language}>
                <span>ENG</span>
            </div>
            <span>|</span>
            <div className={css.form}>
                <MdOutlinePersonOutline />
                <span>Giriş Yap</span>
            </div>
            <span>|</span>
            <div className={css.basket}>
                <span>SEPET</span>
                <span>/</span>
                <span>0,00$</span>
                <BsBasket />
            </div>
        </div>
        <RxCross1 onClick={handleOpen} />
        {/* <div className={css.mobileMenu} style={{display : open ? 'flex':'none'}}>
            <ul className={css.mobileList}>
                <li>
                    GİYİM
                    <AiFillCaretRight />
                </li>
                <li>
                    AKSESUAR
                    <AiFillCaretRight />
                </li>
                <li>
                    MAKETLER
                    <AiFillCaretRight />
                </li>
            </ul>
        </div> */}
    </div>
  )
}

export default Header