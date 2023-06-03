import css from './Description.module.css';

const Description = () => {
  return (
    <div className={css.desc}>
        <div className={css.header}>
            <span>SENİNDE AYAKLARIN GÖĞE BASSIN</span>
        </div>
        <div className={css.content}>
            <p>
            “Senin de ayakların göğe bassın. 
            Hepimizin bir uçağı olmadı mı... Beyaz bir kağıdı itinayla katlayıp onu göklere salıvermek hepimizin bir zamanlardaki heyecanı değil miydi? Şimdi milli ve yerli sermaye ile içimizde o günlerden kalan aynı heyecan ve isteğimizle gerçekten uçak yapmaya ne dersin? Çalışanlarının büyük bir kısmını genç mühendis ve teknisyenlerin oluşturduğu Baykar’da sen de göklere seslenmeye var mısın? Canla başla çalışarak, deneyip yanılıp ama vazgeçmeyerek, aynı azim ve kararlılıkla bu bayrak için, bu topraklar için, bu vatan için çalışan genç ekibimizde sizleri de aramızda görmekten memnuniyet duyarız.”
            </p>
            <span>İnsan Kaynakları Ekibi</span>
        </div>
    </div>
  )
}

export default Description