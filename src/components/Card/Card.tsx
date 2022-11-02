import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useSelector } from 'react-redux'
import { convertDate } from '../../helpers/convertDate'
import { selectFilter } from '../../redux/filter/selector'
import { SortEnum } from '../../redux/filter/types'
import styles from './Card.module.scss'

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string
  firstName: string
  lastName: string
  position: string
  tag: string
  birthday: string
}

export const Card = ({
  tag,
  firstName,
  lastName,
  position,
  image,
  birthday,
}: CardProps) => {
  const { sort } = useSelector(selectFilter)

  const convert = convertDate(birthday)
  const date = convert.formatedBirthday.toString().slice(0, -5)

  return (
    <article className={styles.card}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>
            {firstName} {lastName} <span className={styles.tag}>{tag}</span>
          </span>
          <span className={styles.position}>{position}</span>
        </div>
      </div>
      {sort === SortEnum.Birthday && <div className={styles.right}>{date}</div>}
    </article>
  )
}
