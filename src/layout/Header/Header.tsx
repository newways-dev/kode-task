import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { Tabs } from '../../components'
import { Search } from '../../components/Search/Search'
import { selectPeople } from '../../redux/people/selector'
import styles from './Header.module.scss'

export const Header = () => {
  const { status } = useSelector(selectPeople)

  const tabs = [
    'Все',
    'Frontend',
    'Backend',
    'Дизайн',
    'Аналитика',
    'Менеджмент',
    'iOS',
    'Android',
    'QA',
    'Бэк-офис',
    'HR',
    'PR',
    'Техподдержка',
  ]

  if (status === 'offline' || status === 'error') {
    return (
      <header
        className={clsx({
          [styles.offline]: status === 'offline' || status === 'error',
        })}
      >
        <div className={styles.wrapper}>
          <span className={styles.title}>Поиск</span>
          <div className={styles.errorMessage}>
            Не могу обновить данные. Проверь соединение с интернетом.
          </div>
        </div>
        <Tabs className={styles.tabs} tabs={tabs} />
      </header>
    )
  }

  if (status === 'loading') {
    return (
      <header className={styles.loading}>
        <div className={styles.wrapper}>
          <span className={styles.title}>Поиск</span>
          <div className={styles.errorMessage}>Секундочку, гружусь...</div>
        </div>
        <Tabs className={styles.tabs} tabs={tabs} />
      </header>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Поиск</span>
        <Search className={styles.search} />
        <Tabs className={styles.tabs} tabs={tabs} />
      </div>
    </header>
  )
}
