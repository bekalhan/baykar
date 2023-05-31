import React from 'react';
import css from './Twitter.module.css';
import { AiOutlineTwitter,AiOutlineHeart,AiOutlineInfoCircle} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import { TiTick} from 'react-icons/ti';
import logo from '../../../../assets/logobaykar.jpeg';
import tw1 from '../../../../assets/tw1.jpeg';
import tw2 from '../../../../assets/tw2.jpeg';
import tw3 from '../../../../assets/tw3.jpeg';
import tw4 from '../../../../assets/tw4.jpeg';
import tw5 from '../../../../assets/tw5.jpeg';




const Twitter = () => {
  return (
      <div className={css.twitter}>
        <div className={css.twitterHeader}>
          <AiOutlineTwitter />
          <div className={css.title}>
            <span>BaykarTech</span>
            <span>@BaykarTech</span>
          </div>
        </div>

        <div className={css.tweets}>
          <div className={css.header}>
            <span>
              @BaykarTech adlı kullacının tweetleri
            </span>
            <button className={css.btn}>Takip et</button>
          </div>
          <div className={css.cards}>
            <div className={css.card}>
              <div className={css.logo}>
                <img src={logo} />
              </div>
              <div className={css.content}>
                <div className={css.contentHeader}>
                  <span>BAYKAR <TiTick /></span>
                  <span>@BaykarTech  2s</span>
                </div>
                <div className={css.contentText}>
                Bugün, Genel Müdürümüz @Haluk Bayraktar ve @TCMeb Bakanı Sayın Mahmut Özer, Baykar ile Milli Eğitim Bakanlığı arasında Baykar Milli Teknoloji Mesleki ve Teknik Anadolu Lisesi'nin kurulmasına yönelik protokol imzaladı. Tam bağımsız ve müreffeh Türkiye'nin yarınları olacak…
                </div>
                <div className={css.contentImage}>
                  <img src={tw1} />
                </div>
                <AiOutlineTwitter />
                <div className={css.reactions}>
                <div>
                  <span>
                    <FaRegComment />
                    16
                  </span>
                  <span>
                    <AiOutlineHeart />
                    961
                  </span>
                </div>
                <AiOutlineInfoCircle />
                 </div>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.logo}>
                <img src={logo} />
              </div>
              <div className={css.content}>
                <div className={css.contentHeader}>
                  <span>BAYKAR <TiTick /></span>
                  <span>@BaykarTech  29 M</span>
                </div>
                <div className={css.contentText}>
                Çağ açanlara selam olsun… 
                <br />
                #İstanbulunFethi'nin 570. yıl dönümü kutlu olsun. 🇹🇷                </div>
                <div className={css.contentImage}>
                  <img src={tw2} />
                </div>
                <AiOutlineTwitter />
                <div className={css.reactions}>
                <div>
                  <span>
                    <FaRegComment />
                    16
                  </span>
                  <span>
                    <AiOutlineHeart />
                    961
                  </span>
                </div>
                <AiOutlineInfoCircle />
                 </div>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.logo}>
                <img src={logo} />
              </div>
              <div className={css.content}>
                <div className={css.contentHeader}>
                  <span>BAYKAR <TiTick /></span>
                  <span>@BaykarTech  28 M</span>
                </div>
                <div className={css.contentText}>
                “Tek Millet, İki Devlet" şuuruyla her daim yan yana olduğumuz Can Azerbaycan'ın Bağımsızlık Günü kutlu olsun. 🇹🇷🇦🇿              </div>
                <div className={css.contentImage}>
                  <img src={tw3} />
                </div>
                <AiOutlineTwitter />
                <div className={css.reactions}>
                <div>
                  <span>
                    <FaRegComment />
                    16
                  </span>
                  <span>
                    <AiOutlineHeart />
                    961
                  </span>
                </div>
                <AiOutlineInfoCircle />
                 </div>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.logo}>
                <img src={logo} />
              </div>
              <div className={css.content}>
                <div className={css.contentHeader}>
                  <span>BAYKAR <TiTick /></span>
                  <span>@BaykarTech  10 Ş</span>
                </div>
                <div className={css.contentText}>
                Deprem bölgesindeki geçici aşevlerimizde, üç öğün yemek hizmetimizi AFAD ile koordineli bir şekilde sürdürmeye devam ediyoruz.          </div>
                <div className={css.contentImage}>
                  <img src={tw5} />
                </div>
                <AiOutlineTwitter />
                <div className={css.reactions}>
                <div>
                  <span>
                    <FaRegComment />
                    16
                  </span>
                  <span>
                    <AiOutlineHeart />
                    961
                  </span>
                </div>
                <AiOutlineInfoCircle />
                 </div>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.logo}>
                <img src={logo} />
              </div>
              <div className={css.content}>
                <div className={css.contentHeader}>
                  <span>BAYKAR <TiTick /></span>
                  <span>@BaykarTech  10 Ş</span>
                </div>
                <div className={css.contentText}>
                Deprem bölgesinde başladığımız 1.000 kalıcı konut projesi devam ediyor.

                İlk günden itibaren Milletimizin yanındayız.        </div>
                <div className={css.contentImage}>
                  <img src={tw4} />
                </div>
                <AiOutlineTwitter />
                <div className={css.reactions}>
                <div>
                  <span>
                    <FaRegComment />
                    16
                  </span>
                  <span>
                    <AiOutlineHeart />
                    961
                  </span>
                </div>
                <AiOutlineInfoCircle />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Twitter