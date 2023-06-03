import benefits from '../../../assets/benefits1.png';
import benefits2 from '../../../assets/benefits2.png';
import benefits3 from '../../../assets/benefist3.png';
import benefits4 from '../../../assets/benefits4.png';
import benefits5 from '../../../assets/benefits5.png';
import css from './Benefits.module.css';


const Benefits = () => {
  return (
    <div className={css.benefits}>
        <div className={css.header}>
            <span>SUNDUĞUMUZ FAYDALAR</span>
        </div>
        <div className={css.cards}>
            <div className={css.card}>
                <img src={benefits} />
                <span>EĞİTİM</span>
            </div>
            <div className={css.card}>
                <img src={benefits2} />
                <span>SERVİS HİZMETİ</span>
            </div>
            <div className={css.card}>
                <img src={benefits3} />
                <span>SOSYAL YAŞAM</span>
            </div>
            <div className={css.card}>
                <img src={benefits4} />
                <span>SAĞLIK</span>
            </div>
            <div className={css.card}>
                <img src={benefits5} />
                <span>KREŞ</span>
            </div>
        </div>
        <div className={css.education}>
            <div className={css.card}>
                <img src={benefits} />
                <span>EĞİTİM</span>
            </div>
            <p>
            Genç ve dinamik ekiplerden oluşan çalışan kadromuzda, ekip arkadaşlarımızın eğitimlerine destek olmak ve gelişimlerini görmek bizler için çok değerli. Yüksek Lisans ve Doktora eğitimlerine devam eden personelimize kullanabilecekleri akademik izin hakkı tanıyoruz.Sürekli gelişimi destekleyerek çalışanlarımızın, eğitim ve gelişim faaliyetlerini sürdürüyoruz.
            </p>
        </div>
    </div>
  )
}

export default Benefits