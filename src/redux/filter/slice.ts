import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceState, SortEnum } from './types'

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 'Все',
  sort: SortEnum.Alphabet,
  modal: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.categoryId = action.payload
    },
    setSort: (state, action: PayloadAction<SortEnum>) => {
      state.sort = action.payload
    },
    setModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
  },
})

export const { setSearchValue, setCategoryId, setSort, setModal } =
  filterSlice.actions

export default filterSlice.reducer
