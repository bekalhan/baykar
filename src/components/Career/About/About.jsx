import { useState } from 'react';
import css from './About.module.css';

//images
import about1 from '../../../assets/about1.jpeg';
import about2 from '../../../assets/about2.jpeg';
import about3 from '../../../assets/about3.jpeg';


const About = () => {

    const [selected,setSelected] = useState(1);

    console.log("select : ",selected);

  return (
    <div className={css.about}>
        <div className={css.header}>
            <span>YERLEŞKELERİMİZ</span>
        </div>
        <div className={css.content}>
            <div className={css.selectItem}>
                <div className={css.item} style={{backgroundColor:selected===1 ? '#ff4450':'#fff'}} onClick={()=>setSelected(1)}>
                    <span style={{color:selected===1 ? '#fff':'#002359'}}>Özdemir Bayraktar Arge Ve Üretim Merkezi</span>
                </div>
                <div className={css.item} style={{backgroundColor:selected===2 ? '#ff4450':'#fff'}} onClick={()=>setSelected(2)}>
                    <span style={{color:selected===2 ? '#fff':'#002359'}}>Keşan Uçuş Eğitim Ve Test Merkezi</span>
                </div>
                <div className={css.item} style={{backgroundColor:selected===3 ? '#ff4450':'#fff'}} onClick={()=>setSelected(3)}> 
                    <span style={{color:selected===3 ? '#fff':'#002359'}}>Çorlu Uçuş Eğitim Ve Test Merkezi</span>
                </div>
            </div>
            <div className={css.slides}>
                <div className={css.slide} style={{display:selected===1 ? 'flex':'none'}}>
                    <img src={about3} />
                    <div className={css.desc}>
                        <span>Özdemir Bayraktar Arge Ve Üretim Merkezi</span>
                        <span>
                        Özdemir Bayraktar Ar-Ge ve Üretim Merkezi, yemyeşil kampüsümüz içerisinde yer alan Ar-Ge ve üretim ofislerimizin yanı sıra geniş sosyal yaşam alanlarından oluşan büyük bir yerleşkedir.
                        <br></br>
                        Yerleşkemizi mutlu bir kampüs anlayışıyla, çalışanlarımızın vakitlerini en iyi şekilde geçirebilmeleri ve çalışma hayatlarında verimli olmaları gayesiyle şekillendiriyoruz. Zengin sosyal yaşam olanaklarımızla Özdemir Bayraktar Ar-ge ve Üretim Merkezi tam anlamıyla yaşayan bir ofis!
                        </span>
                    </div>
                </div>
                <div className={css.slide} style={{display:selected===2 ? 'flex':'none'}}>
                    <img src={about2} />
                    <div className={css.desc}>
                        <span>Keşan Uçuş Eğitim Ve Test Merkezi</span>
                        <span>
                        Keşan Uçuş Eğitim ve Test Merkezi’miz çalışmalarını yürüttüğümüz, gözdelerimizden biri olan Bayraktar TB2’ye ev sahipliği yapan, insansız hava araçlarının bakım, onarım, test ve uçuş faaliyetlerinin yürütüldüğü ve deneyimli eğitmenlerimizle sahada görev alacak personellerimize teorik ve pratik eğitimlerin verildiği yerleşkemizdir.
                        </span>
                    </div>
                </div>
                <div className={css.slide} style={{display:selected===3 ? 'flex':'none'}}>
                    <img src={about1} />
                    <div className={css.desc}>
                        <span>Çorlu Uçuş Eğitim Ve Test Merkezi</span>
                        <span>
                        Çorlu Uçuş Eğitim ve Test Merkezi’miz çalışmalarını yürüttüğümüz, kendi sınıfında dünyadaki en güçlü ve muharebe kabiliyeti en yüksek Taarruzi İnsansız Hava Araçlarından Bayraktar Akıncı’ya ev sahipliği yapan, bakım, onarım, test ve uçuş faaliyetlerinin yürütüldüğü ve deneyimli eğitmenlerimizle sahada görev alacak personellerimize teorik ve pratik eğitimlerin verildiği yerleşkemizdir.                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About