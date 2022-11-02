import styles from './NotFound.module.scss'

import notFound from '../../assets/notFound.png'

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img src={notFound} alt="" />
      <span className={styles.title}>Мы никого не нашли</span>
      <span className={styles.description}>
        Попробуй скорректировать запрос
      </span>
    </div>
  )
}
