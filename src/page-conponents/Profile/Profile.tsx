import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import styles from './Profile.module.scss'

import star from '../../assets/icons/star.svg'
import call from '../../assets/icons/call.svg'
import back from '../../assets/icons/back-arrow.svg'
import { PeopleType } from '../../types/types'
import { convertDate } from '../../helpers/convertDate'
import { useSelector } from 'react-redux'
import { selectPeople } from '../../redux/people/selector'

export const Profile = () => {
  const { items } = useSelector(selectPeople)
  const [profile, setProfile] = useState<PeopleType | null>(null)
  const { id } = useParams()

  useEffect(() => {
    const findProfile =
      items && items.find((item) => item.id === id?.toString())
    setProfile(findProfile as PeopleType)
  }, [id, items])

  const phoneNumber =
    profile && parsePhoneNumberFromString(profile?.phone)?.formatNational()

  const converted = profile && convertDate(profile?.birthday)

  return (
    <div className={styles.profile}>
      {profile && (
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <Link to="/">
              <img src={back} className={styles.back} alt="" />
            </Link>
            <div className={styles.headInfo}>
              <img className={styles.image} src={profile.avatarUrl} alt="" />
              <span className={styles.name}>
                {profile.firstName} {profile.lastName}{' '}
                <span className={styles.tag}>{profile.userTag}</span>
              </span>
              <span className={styles.position}>{profile.position}</span>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.row}>
              <ReactSVG src={star} />
              <p className={styles.infoText}>{converted?.formatedBirthday}</p>
              <p className={styles.age}>
                {converted?.age} {converted?.ageString}
              </p>
            </div>
            <div className={styles.row}>
              <ReactSVG src={call} />
              <a href={`tel:${phoneNumber}`} className={styles.infoText}>
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
