import { format } from 'date-fns'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from '../../components'
import { selectFilter } from '../../redux/filter/selector'
import { PeopleType } from '../../types/types'

import { NotFound } from '../NotFound/NotFound'
import styles from './People.module.scss'

interface PeopleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  people: PeopleType[]
}

export const People = ({ people }: PeopleProps) => {
  const currentMonth = new Date().getMonth() + 1
  const nextYearBirthday = new Date().getFullYear() + 1

  const { sort } = useSelector(selectFilter)

  const thisYear =
    people &&
    people.filter(
      (item) =>
        Number(format(new Date(item.birthday), 'm')) > Number(currentMonth)
    )

  const nextYear =
    people &&
    people.filter(
      (item) =>
        Number(format(new Date(item.birthday), 'm')) < Number(currentMonth)
    )

  return (
    <div className={styles.people}>
      {people.length === 0 && <NotFound />}
      {sort === 0 &&
        people.map((item) => (
          <Link key={item.id} to={`/profile/${item.id}`}>
            <Card
              tag={item.userTag}
              position={item.position}
              image={item.avatarUrl}
              firstName={item.firstName}
              lastName={item.lastName}
              birthday={item.birthday}
            />
          </Link>
        ))}
      {sort === 1 && (
        <>
          {thisYear.map((item) => (
            <Link key={item.id} to={`/profile/${item.id}`}>
              <Card
                tag={item.userTag}
                position={item.position}
                image={item.avatarUrl}
                firstName={item.firstName}
                lastName={item.lastName}
                birthday={item.birthday}
              />
            </Link>
          ))}
          <div className={styles.divider}>
            <div className={styles.line} />
            <span>{nextYearBirthday}</span>
            <div className={styles.line} />
          </div>
          {nextYear.map((item) => (
            <Link key={item.id} to={`/profile/${item.id}`}>
              <Card
                tag={item.userTag}
                position={item.position}
                image={item.avatarUrl}
                firstName={item.firstName}
                lastName={item.lastName}
                birthday={item.birthday}
              />
            </Link>
          ))}
        </>
      )}
    </div>
  )
}
