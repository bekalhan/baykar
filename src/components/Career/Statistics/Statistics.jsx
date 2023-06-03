import css from './Statistics.module.css';
import persons from '../../../assets/persons.png';

const Statistics = () => {
  return (
    <div className={css.statistics}>
         <span>İSTATİSTİKLER</span>
        <div className={css.numbers}>
            <div className={css.personels}>
                <div className={css.group}>
                    <img src={persons} />
                    <span>1500</span>
                    <span>Mühendis</span>
                </div>
                <div className={css.group}>
                    <img src={persons} />
                    <span>1600</span>
                    <span>Teknisyen</span>
                </div>
                <div className={css.group}>
                    <img src={persons} />
                    <span>3100</span>
                    <span>Çalışan</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistics