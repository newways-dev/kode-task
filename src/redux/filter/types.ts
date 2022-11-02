export enum SortEnum {
  Alphabet,
  Birthday,
}

export interface FilterSliceState {
  searchValue: string
  categoryId: string
  sort: SortEnum
  modal: boolean
}
