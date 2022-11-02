import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import people from './people/slice'
import filter from './filter/slice'

export const store = configureStore({
  reducer: {
    people,
    filter,
  },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
