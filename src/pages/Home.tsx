import { format } from 'date-fns'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Modal, Skeleton } from '../components'
import { CriticalError, People } from '../page-conponents'
import { selectFilter } from '../redux/filter/selector'
import { fetchAllPeople, fetchPeople } from '../redux/people/asyncActions'
import { selectPeople } from '../redux/people/selector'
import { useAppDispatch } from '../redux/store'
import { PeopleType } from '../types/types'

import styles from './Home.module.scss'

const Home = () => {
  const dispatch = useAppDispatch()
  const { items, status } = useSelector(selectPeople)
  const { searchValue, categoryId, modal, sort } = useSelector(selectFilter)

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ))

  let people =
    items &&
    items
      .filter((obj: PeopleType) => {
        if (
          obj.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
          obj.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
          obj.userTag.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return true
        }
        return false
      })
      .sort((a, b) => a.firstName.localeCompare(b.firstName))

  if (sort === 1) {
    const sortedArray = people.sort(
      (a, b) =>
        Number(format(new Date(a.birthday), 'M')) -
        Number(format(new Date(b.birthday), 'M'))
    )

    const sortByDate = sortedArray.sort(
      (a, b) =>
        Number(format(new Date(a.birthday), 'd m')) -
        Number(format(new Date(b.birthday), 'd m'))
    )

    people = sortByDate
  }

  useEffect(() => {
    const getPeople = async () => {
      dispatch(fetchPeople({ category: categoryId }))
    }
    getPeople()
  }, [dispatch, categoryId])

  useEffect(() => {
    const getAllPeople = async () => {
      dispatch(fetchAllPeople())
    }
    getAllPeople()
  }, [dispatch])

  return (
    <>
      {modal && <Modal />}
      {status === 'error' && <CriticalError />}
      {status !== 'loading' && status !== 'error' ? (
        <People people={people} />
      ) : (
        <div className={styles.skeletons}>{skeletons}</div>
      )}
    </>
  )
}

export default Home
