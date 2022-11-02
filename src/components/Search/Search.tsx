import clsx from 'clsx'
import debounce from 'lodash.debounce'
import { ChangeEvent, DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { setModal, setSearchValue } from '../../redux/filter/slice'

import searchIcon from '../../assets/icons/search.svg'
import sortIcon from '../../assets/icons/sort.svg'

import styles from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter } from '../../redux/filter/selector'

interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Search = ({ className }: SearchProps) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>('')
  const { sort } = useSelector(selectFilter)

  const updateSearchValue = debounce((str: string) => {
    dispatch(setSearchValue(str))
  }, 500)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={clsx(styles.searchContainer, className)}>
      <div className={styles.search}>
        <div className={styles.wrapper}>
          <ReactSVG className={styles.searchIcon} src={searchIcon} />
          <input
            className={styles.input}
            value={value}
            onChange={onChange}
            type='text'
            placeholder='Введи имя, тег, почту...'
          />
          <ReactSVG
            onClick={() => dispatch(setModal(true))}
            className={clsx(styles.sort, { [styles.activeSort]: sort === 1 })}
            src={sortIcon}
          />
        </div>
      </div>
      <span className={styles.cancel}>Отмена</span>
    </div>
  )
}
