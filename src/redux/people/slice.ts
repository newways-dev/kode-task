import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PeopleType } from '../../types/types'
import { fetchAllPeople, fetchPeople } from './asyncActions'
import { PeopleSliceState, Status } from './types'

const initialState: PeopleSliceState = {
  items: [],
  status: Status.LOADING,
}

const peopleSlice = createSlice({
  name: 'people',
  initialState: initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PeopleType[]>) => {
      state.items = action.payload
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchPeople.rejected, (state) => {
      state.status = Status.ERROR
    })
    builder.addCase(fetchAllPeople.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })

    builder.addCase(fetchAllPeople.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchAllPeople.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { setItems, setStatus } = peopleSlice.actions

export default peopleSlice.reducer
