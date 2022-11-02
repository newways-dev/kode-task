import { PeopleType } from '../../types/types'

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
  OFFLINE = 'offline',
}

export interface PeopleSliceState {
  items: PeopleType[]
  status: Status
}

export type SearchPeopleParams = {
  category: string
}
