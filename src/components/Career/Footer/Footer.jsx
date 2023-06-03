import css from './Footer.module.css';
import logo from '../../../assets/logo2.png';


const Footer = () => {
  return (
   <div className={css.footer}>
        <div className={css.logodesc}>
            <img src={logo} />
            <p>
            Türkiye’nin en parlak mühendisleri arasına katılabilirsiniz. Yetkin, dinamik, gelişim odaklı mühendislerimiz ve kurumsal yöneticilerimizle takım ruhunun güçlü olduğu hedef odaklı bir kariyer imkanını yakından tecrübe edebilirsiniz.
            </p>
        </div>
        <ul className={css.menu}>
            <span>Baykar</span>
            <li>Hakkımızda</li>
            <li>Yönetim</li>
            <li>Tarihçe</li>
        </ul>
        <ul className={css.menu}>
            <span>Kariyer</span>
            <li>Açık Pozisyonlar</li>
            <li>İş</li>
            <li>Staj</li>
        </ul>
        <ul className={css.menu}>
            <span>İletişim</span>
            <li>
                <span>E-posta:</span>
                <span>beratkalhan99@gmail.com</span>
            </li>
            <li>
                <span>Telefon:</span>
                <span>+90 231 432 42 43</span>
            </li>
        </ul>
   </div>
  )
}

export default Footer