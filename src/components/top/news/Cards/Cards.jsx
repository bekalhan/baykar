import React from 'react';
import css from './Cards.module.css';
import new1 from '../../../../assets/new1.jpeg';
import new2 from '../../../../assets/new2.jpeg';
import new3 from '../../../../assets/new3.jpeg';
import new4 from '../../../../assets/new4.jpeg';


const Cards = () => {
  return (
    <div className={css.cards}>
        <div className={css.cardHeader}>
            <span>HABERLER</span>
        </div>
        <div className={css.allcard}>
            <div className={css.card}>
                <div className={css.cardImage}>
                    <img src={new1} />
                </div>
                <div className={css.content}>
                    <div className={css.contentHeader}>
                        <div className={css.fixHeader}>
                            <span>HABER</span>
                        </div>
                        <div className={css.varHeader}>
                            ASELSAN, BAYKAR İLE SÖZLEŞME İMZALADI
                        </div>
                        <div className={css.desc}>
                        ASELSAN, BAYKAR Makina firmasıyla 17,6 milyon dolarlık yeni iş sözleşmesi imzaladığını duyurdu.
                        </div>
                        <div className={css.date}>
                            25 Mayıs 2023
                        </div>
                    </div>

                </div>
            </div>
            <div className={css.card}>
                <div className={css.cardImage}>
                    <img src={new2} />
                </div>
                <div className={css.content}>
                    <div className={css.contentHeader}>
                        <div className={css.fixHeader}>
                            <span>HABER</span>
                        </div>
                        <div className={css.varHeader}>
                        İZLEYİCİLERDEN "HEDEF KIZILELMA" BELGESELİNE TAM NOT                        </div>
                    </div>
                    <div className={css.contentMiddle}>
                        <div className={css.desc}>
                        Türkiye'nin ilk insansız savaş uçağı olan Bayraktar KIZILELMA'nın geliştirilme aşamalarını ve Baykar'ın insansız hava aracı geliştirme yolculuğunu anlatan "Hedef KIZILELMA" belgeseli, ilk gösterimde davetlilerden tam not aldı.                            </div>
                            <div className={css.date}>
                            12 Mayıs 2023                            </div>
                    </div>

                </div>
            </div>
            <div className={css.card}>
                <div className={css.cardImage}>
                    <img src={new3} />
                </div>
                <div className={css.content}>
                    <div className={css.contentHeader}>
                        <div className={css.fixHeader}>
                            <span>HABER</span>
                        </div>
                        <div className={css.varHeader}>
                        "HEDEF KIZILELMA" BELGESELİ İZLEYİCİYLE BULUŞTU                        </div>
                        <div className={css.desc}>
                        Baykar Yönetim Kurulu Başkanı ve Teknoloji Lideri Selçuk Bayraktar, "Hedef KIZILELMA klasik bir teknoloji belgeseli değil. Daha çok işin manasını ve ruhunu anlatıyor." dedi.                        </div>
                        <div className={css.date}>
                        11 Mayıs 2023                        </div>
                    </div>

                </div>
            </div>
            <div className={css.card}>
                <div className={css.cardImage}>
                    <img src={new4} />
                </div>
                <div className={css.content}>
                    <div className={css.contentHeader}>
                        <div className={css.fixHeader}>
                            <span>HABER</span>
                        </div>
                        <div className={css.varHeader}>
                        "HEDEF KIZILELMA" BELGESELİ İZLEYİCİYLE BULUŞTU                        </div>
                        <div className={css.desc}>
                        Baykar Yönetim Kurulu Başkanı ve Teknoloji Lideri Selçuk Bayraktar, "İnişleri ve çıkışlarıyla, acısıyla tatlısıyla hayatın kendisi gibi zor ama azimle, gayretle, dostlukla ve iyi ahlakla güzelleşen yoğun bir serüven yaşadık." dedi.                        </div>
                        <div className={css.date}>
                        11 Mayıs 2023     
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards