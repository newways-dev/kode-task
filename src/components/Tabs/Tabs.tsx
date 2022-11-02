import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/filter/selector'
import { setCategoryId } from '../../redux/filter/slice'
import styles from './Tabs.module.scss'

interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabs: string[]
}

export const Tabs = ({ tabs, className }: TabsProps) => {
  const { categoryId } = useSelector(selectFilter)
  const [active, setActive] = useState<string>(categoryId)
  const dispatch = useDispatch()

  const handleClick = (tab: string) => {
    setActive(tab)
    dispatch(setCategoryId(tab))
  }

  return (
    <div className={clsx(styles.tabs, className)}>
      <ul className={styles.list}>
        {tabs.map((tab, index) => (
          <li
            onClick={() => handleClick(tab)}
            className={clsx(styles.item, { [styles.active]: active === tab })}
            key={index}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  )
}
