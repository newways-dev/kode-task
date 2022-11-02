import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './Modal.module.scss'

import close from '../../assets/icons/close.svg'
import back from '../../assets/icons/back-arrow.svg'
import { setModal, setSort } from '../../redux/filter/slice'
import { useDispatch, useSelector } from 'react-redux'
import { SortEnum } from '../../redux/filter/types'
import { selectFilter } from '../../redux/filter/selector'

export const Modal = () => {
  const { sort } = useSelector(selectFilter)
  const [active, setActive] = useState<SortEnum>(sort)
  const dispatch = useDispatch()

  const handleClick = (type: SortEnum) => {
    if (type === SortEnum.Alphabet) {
      setActive(SortEnum.Alphabet)
      dispatch(setSort(SortEnum.Alphabet))
      dispatch(setModal(false))
    } else {
      setActive(SortEnum.Birthday)
      dispatch(setSort(SortEnum.Birthday))
      dispatch(setModal(false))
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <div className={styles.top}>
          <ReactSVG src={back} className={styles.back} />
          <p className={styles.title}>Сортировка</p>
          <ReactSVG
            onClick={() => dispatch(setModal(false))}
            className={styles.close}
            src={close}
          />
        </div>
        <div className={styles.options}>
          <div
            onClick={() => handleClick(SortEnum.Alphabet)}
            className={styles.option}
          >
            <input
              onChange={() => handleClick(SortEnum.Alphabet)}
              checked={active === SortEnum.Alphabet}
              className={styles.input}
              type="radio"
            />
            <label className={styles.label}>По алфавиту</label>
          </div>
          <div
            onClick={() => handleClick(SortEnum.Birthday)}
            className={styles.option}
          >
            <input
              onChange={() => handleClick(SortEnum.Birthday)}
              checked={active === SortEnum.Birthday}
              className={styles.input}
              type="radio"
            />
            <label className={styles.label}>По дню рождения</label>
          </div>
        </div>
      </div>
    </div>
  )
}
