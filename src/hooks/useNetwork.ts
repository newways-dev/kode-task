import { useEffect, useState } from 'react'
import { fetchAllPeople } from '../redux/people/asyncActions'
import { setStatus } from '../redux/people/slice'
import { Status } from '../redux/people/types'
import { useAppDispatch } from '../redux/store'

export const useNetwork = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)
  const dispatch = useAppDispatch()

  const updateNetwork = () => {
    setIsOnline(window.navigator.onLine)
  }

  if (!isOnline) {
    dispatch(setStatus(Status.OFFLINE))
  } else {
    dispatch(fetchAllPeople())
  }

  useEffect(() => {
    window.addEventListener('offline', updateNetwork)
    window.addEventListener('online', updateNetwork)

    return () => {
      window.removeEventListener('offline', updateNetwork)
      window.removeEventListener('online', updateNetwork)
    }
  })
  return isOnline
}
