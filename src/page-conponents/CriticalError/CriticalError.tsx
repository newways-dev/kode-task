import styles from './CriticalError.module.scss'

import ufo from '../../assets/ufo.png'
import { fetchPeople } from '../../redux/people/asyncActions'
import { useSelector } from 'react-redux'
import { selectFilter } from '../../redux/filter/selector'
import { useAppDispatch } from '../../redux/store'

export const CriticalError = () => {
  const dispatch = useAppDispatch()
  const { categoryId } = useSelector(selectFilter)

  const tryAgain = () => {
    dispatch(fetchPeople({ category: categoryId }))
  }

  return (
    <div className={styles.criticalError}>
      <img src={ufo} alt="" />
      <span className={styles.title}>Какой-то сверхразум все сломал</span>
      <span className={styles.description}>Постараемся быстро починить</span>
      <button onClick={() => tryAgain()} className={styles.button}>
        Попробовать снова
      </button>
    </div>
  )
}
