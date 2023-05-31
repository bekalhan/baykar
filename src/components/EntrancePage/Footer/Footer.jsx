import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footer}>
        <div className={css.wrapper}>
            <span>HAKKIMIZDA</span>
            <ul className={css.menu}>
                <li>Biz Baykarız</li>
                <li>Vizyon</li>
                <li>Tarihçe</li>
                <li>Teknolojik Yetkinlikler / Kaabiliyetler</li>
                <li>Sosyal Sorumluluk</li>
                <li>Özdemir Bayraktar</li>
                <li>Haluk Bayraktar</li>
                <li>Selçuk Bayraktar</li>
                <li>Tedarikçi Başvurusu</li>
            </ul>
        </div>
        <div className={css.wrapper}>
            <span>HAKKIMIZDA</span>
            <ul className={css.menu}>
                <li>İnsansız Hava Aracı Sistemleri</li>
                <li>Kamuta Kontrol Haberleşme Sistemleri</li>
                <li>Simülatör Sistemi</li>
                <li>Alt Sistemler</li>
                <li>Faydalı Yük Sistemleri</li>
                <li>Ağ Merkezli Yazılım</li>
                <li>Kullanıcı Eğitimleri</li>
                <li>Satış Sonrası Hizmetler</li>
                <li>Orman Yangınlarıyla Mücadele</li>
            </ul>
        </div>
        <div className={css.wrapper}>
            <span>HAKKIMIZDA</span>
            <ul className={css.menu}>
                <li>Merkezi Komuta Kontrol</li>
                <li>Bayraktar TB3</li>
                <li>Yapay Zeka</li>
                <li>Cezeri Uçan Arabar</li>
            </ul>
        </div>
        <div className={css.wrapper}>
            <span>HAKKIMIZDA</span>
            <ul className={css.menu}>
                <li>İnsan Kaynakları</li>
                <li>Açık Pozisyonlar</li>
                <li>Staj Başvuruları</li>
                <li>Baykarda Yaşam</li>
            </ul>
        </div>
        <div className={css.wrapper}>
            <span>Basın Odası</span>
            <ul className={css.menu}>
                <li>Haberler</li>
                <li>Fotoğraf Galerisi</li>
                <li>Video Galerisi</li>
                <li>Dökümanlar</li>
            </ul>
        </div>
        <div className={css.wrapper}>
            <span>İLETİSİM</span>
            <ul className={css.menu}>
                <li>iletisim</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer