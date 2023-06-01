import React, { useState } from 'react';
import {AiFillCaretDown,AiFillCaretRight} from 'react-icons/ai';
import css from './Header.module.css';
import logo from '../../../assets/baykarkariyer.png';
import {BiMenu} from 'react-icons/bi';
import logo2 from '../../../assets/logo2.png';
import {RxCross2} from 'react-icons/rx';

const Header = () => {

    const [open,setOpen] = useState(false);
    const [toggle,setToggle] = useState({kariyer:false,staj:false});


    const setDropdown = (name) => {
        if(name=== 'kariyer'){
            setToggle({kariyer:!toggle.kariyer,staj:toggle.staj});
        }else if(name === 'staj'){
            setToggle({kariyer:toggle.kariyer,staj:!toggle.staj});
        }
    }

  return (
    <div className={css.header}>
        <div className={css.container}>
             <div className={css.menuItem}>
                <BiMenu style={{display: !open ? 'block':'none'}} onClick={()=>setOpen(true)} />
                <RxCross2 style={{display: open ? 'block':'none'}} onClick={()=>setOpen(false)} />
            </div>

            <div className={css.logo}>
                <img src={logo} />
            </div>

            <div className={css.logo2}>
                <img src={logo2} />
            </div>

            <div className={css.all}>
                <div className={css.menu}>
                    <ul className={css.list}>
                        <li>
                            KARİYER <AiFillCaretDown/>
                            <div className={css.subMenu}>
                                <ul>
                                    <li>İstatislik</li>
                                    <li>Yerleşkelerimiz</li>
                                    <li>Sunduğumuz Faydalar</li>
                                    <li>Sosyal Alanlar</li>

                                </ul>
                            </div>
                        </li>
                        <li>AÇIK POZİSYONLAR</li>
                        <li>
                            STAJ <AiFillCaretDown />
                            <div className={css.subMenu}>
                                <ul>
                                    <li>İstatislik</li>
                                    <li>Yerleşkelerimiz</li>
                                    <li>Sunduğumuz Faydalar</li>
                                </ul>
                            </div>
                        </li>
                        <li>S.S.S</li>
                        <li>BAYKAR</li>
                    </ul>
                </div>
                <div className={css.buttons}>
                                <button>EN</button>
                                <button>GİRİŞ</button>
                </div>
            </div>
        </div>

        <div className={css.mobileMenu} style={{display : open ? 'block':'none'}}>
            <ul>
                <li onClick={()=>{setDropdown('kariyer')}}>
                    <div className={css.title}>
                        KARİYER
                        <AiFillCaretDown style={{display:toggle.kariyer ? 'block' :'none'}} />
                        <AiFillCaretRight style={{display:!toggle.kariyer ? 'block' :'none'}} />
                    </div>
                    <div className={css.subMenuMobile} style={{display:toggle.kariyer ? 'flex' :'none'}}>
                                <ul>
                                    <li>İstatislik</li>
                                    <li>Yerleşkelerimiz</li>
                                    <li>Sunduğumuz Faydalar</li>
                                    <li>Sosyal Alanlar</li>

                                </ul>
                    </div>
                </li>
                <li>
                    AÇIK POZİSYONLAR
                </li>
                <li onClick={()=>{setDropdown('staj')}}>
                    <div className={css.title}>
                        STAJ
                        <AiFillCaretDown style={{display:toggle.staj ? 'block' :'none'}} />
                        <AiFillCaretRight style={{display:!toggle.staj ? 'block' :'none'}} />
                    </div>
                    <div className={css.subMenuMobile} style={{display:toggle.staj ? 'flex':'none'}}>
                                <ul>
                                    <li>İstatislik</li>
                                    <li>Yerleşkelerimiz</li>
                                    <li>Sunduğumuz Faydalar</li>
                                    <li>Sosyal Alanlar</li>

                                </ul>
                    </div>
                </li>
                <li>
                    S.S.S
                </li>
                <li>
                    BAYKAR
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Header