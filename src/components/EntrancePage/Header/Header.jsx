import React from 'react';
import css from './Header.module.css';
import {TfiYoutube} from 'react-icons/tfi';
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa';
import {BsTwitter,BsInstagram,BsDot} from 'react-icons/bs';
import {BiMenuAltLeft} from 'react-icons/bi';
import hakkimizda from '../../../assets/hakkimizda.png';
import neler from '../../../assets/neleryapiyoruz.png';
import gelecegimiz from '../../../assets/gelecegimiz.png';
import {useNavigate} from 'react-router-dom';

//images
import logo from '../../../assets/logo.svg'
import { useState } from 'react';

const Header = () => {

    const navigate = useNavigate();

    const [openMenu,setOpenMenu] = useState(true);
    const [toggle,setToggle] = useState({hak:false,neler:false,gel:false});
    const [toggleM,setToggleM] = useState({hak:false,neler:false,gel:false});



    const handleMenuOpen = (name) => {
        if(name==="hak"){
            setToggle({hak:!toggle.hak,neler:false,gel:false})
        }else if(name==="neler"){
            setToggle({hak:false,neler:!toggle.neler,gel:false})
        }else if(name==="gel"){
            setToggle({hak:false,neler:false,gel:!toggle.gel})
        }
    }

    const handleMenuOpenM = (name) => {
        if(name==="hak"){
            setToggleM({hak:!toggleM.hak,neler:false,gel:false})
        }else if(name==="neler"){
            setToggleM({hak:false,neler:!toggleM.neler,gel:false})
        }else if(name==="gel"){
            setToggleM({hak:false,neler:false,gel:!toggleM.gel})
        }
    }

  return (
    <div className={css.header}>
        <div className={css.icons}>
            <TfiYoutube />
            <FaLinkedinIn />
            <BsTwitter />
            <FaFacebookF />
            <BsInstagram />
            <div className={css.language}>
                <BsDot />
                <span>EN</span>
            </div>
        </div>
        <div className={css.navbar}>
            <div className={css.menuIcon} onClick={()=>{setOpenMenu(!openMenu)}}>
                <BiMenuAltLeft />
            </div>
            <div className={css.logo}>
                <img src={logo} />
            </div>
            <div className={css.navbarMenu}>
                <ul className={css.menu}>
                    <li className={css.menuItem} onClick={()=>handleMenuOpen('hak')}>
                        <a href='#'>HAKKIMIZDA</a>
                        <div className={css.megaNav} style={{display:toggle.hak ? 'grid':'none'}}>
                            <div>
                                <img src={hakkimizda} />
                            </div>
                            <ul className={css.megaMenu}>
                                <li>Biz Baykarız</li>
                                <li>Vizyon</li>
                                <li>Tarihçe</li>
                                <li>Teknolojik Yetkinlikler/Kabiliyetler</li>
                                <li>Sosyal Sorumluluk</li>
                                <li>Dökümanlar</li>
                                <li>Yönetim</li>
                                <li>Haberler</li>
                                <li>Kalite Politikamız</li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.menuItem} onClick={()=>handleMenuOpen('neler')}>
                        <a href='#'>NELER YAPIYORUZ</a>
                        <div className={css.megaNav} style={{display:toggle.neler ? 'grid':'none'}}>
                            <div>
                                <img src={neler} />
                            </div>
                            <ul className={css.megaMenu}>
                                <li>İnsansız Hava Aracı Sistemleri</li>
                                <li>Aviyonikler/Alt Sistemler</li>
                                <li>Simülatör sistemi</li>
                                <li>Faydalı Yük Sistemleri</li>
                                <li>Ağ Merkezli Yazılım</li>
                                <li>Orman Yangınları ile Mücadele</li>
                                <li>Satış Sonrası Hizmetler</li>
                                <li>Komuta Kontrol Haberleşme</li>
                                <li>Kalite Politikamız</li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.menuItem} onClick={()=>handleMenuOpen('gel')}>
                        <a href='#'>GELECEĞİMİZ</a>
                        <div className={css.megaNav} style={{display:toggle.gel ? 'grid':'none'}}>
                            <div>
                                <img src={gelecegimiz} />
                            </div>
                            <ul className={css.megaMenu}>
                                <li>Bayraktar TB3</li>
                                <li>Merkezi Komuta Kontrol</li>
                                <li>Yapay Zeka</li>
                                <li>Cezeri Uçan Araba</li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.menuItem} onClick={()=>navigate('/career')}>
                        <a href='#'>KARİYER</a>
                    </li>
                    <li className={css.menuItem}>
                        <a href='#'>MAĞAZA</a>
                    </li>
                    <li className={css.menuItem}>
                        <a href='#'>İLETİŞİM</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={css.mobileMenu} style={{display: openMenu ? 'block' : 'none',transition:'.3s ease'}}>
            <ul className={css.menuMobile}>
                    <li className={css.menuItem} onClick={()=>handleMenuOpenM('hak')}>
                        <a href='#'>HAKKIMIZDA</a>
                        <div className={css.megaNavMobile} style={{display:toggleM.hak ? 'flex':'none'}}> 
                            <ul>
                                <li>Biz Baykarız</li>
                                <li>Vizyon</li>
                                <li>Tarihçe</li>
                                <li>Teknolojik Yetkinlikler/Kabiliyetler</li>
                                <li>Sosyal Sorumluluk</li>
                                <li>Dökümanlar</li>
                                <li>Yönetim</li>
                                <li>Haberler</li>
                                <li>Kalite Politikamız</li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.menuItem} onClick={()=>handleMenuOpenM('neler')}>
                        <a href='#'>NELER YAPIYORUZ</a>
                        <div className={css.megaNavMobile} style={{display:toggleM.neler ? 'flex':'none'}}>
                            <ul>
                                <li>Biz Baykarız</li>
                                <li>Vizyon</li>
                                <li>Tarihçe</li>
                                <li>Teknolojik Yetkinlikler/Kabiliyetler</li>
                                <li>Sosyal Sorumluluk</li>
                                <li>Dökümanlar</li>
                                <li>Yönetim</li>
                                <li>Haberler</li>
                                <li>Kalite Politikamız</li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.menuItem} onClick={()=>handleMenuOpenM('gel')}>
                        <a href='#'>GELECEĞİMİZ</a>
                        <div className={css.megaNavMobile} style={{display:toggleM.gel ? 'flex':'none'}}>
                            <ul>
                                <li>Biz Baykarız</li>
                                <li>Vizyon</li>
                                <li>Tarihçe</li>
                                <li>Teknolojik Yetkinlikler/Kabiliyetler</li>
                                <li>Sosyal Sorumluluk</li>
                                <li>Dökümanlar</li>
                                <li>Yönetim</li>
                                <li>Haberler</li>
                                <li>Kalite Politikamız</li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.menuItem} onClick={()=>navigate('/career')}>
                        <a href='#'>KARİYER</a>
                    </li>
                    <li className={css.menuItem}>
                        <a href='#'>MAĞAZA</a>
                    </li>
                    <li className={css.menuItem}>
                        <a href='#'>İLETİŞİM</a>
                    </li>
            </ul>
        </div>

    </div>
  )
}

export default Header