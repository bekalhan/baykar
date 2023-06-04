import css from './Statistics.module.css';
import persons from '../../../assets/persons.png';
import NumberCounter from 'number-counter';

const Statistics = () => {
  return (
    <div className={css.statistics}>
         <span>İSTATİSTİKLER</span>
        <div className={css.numbers}>
            <div className={css.personels}>
                <div className={css.group}>
                    <img src={persons} />
                    <span>
                        <NumberCounter end={1500} start={100} delay={10}  />
                    </span>
                    <span>Mühendis</span>
                </div>
                <div className={css.group}>
                    <img src={persons} />
                    <span>
                     <NumberCounter end={1500} start={100} delay={10}  />
                    </span>
                    <span>Teknisyen</span>
                </div>
                <div className={css.group}>
                    <img src={persons} />
                    <span>
                     <NumberCounter end={3100} start={300} delay={13}  />
                    </span>
                    <span>Çalışan</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistics