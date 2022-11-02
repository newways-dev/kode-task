import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { PeopleType } from '../../types/types'
import { SearchPeopleParams } from './types'

export const fetchAllPeople = createAsyncThunk<PeopleType[]>(
  'people/fetchAllPeopleStatus',
  async () => {
    const { data } = await axios.get(
      `https:/stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all`
    )
    return data.items
  }
)

export const fetchPeople = createAsyncThunk<PeopleType[], SearchPeopleParams>(
  'people/fetchPeopleStatus',
  async (params) => {
    const { category } = params

    let example

    switch (category) {
      case 'Все':
        example = 'all'
        break
      case 'Frontend':
        example = 'frontend'
        break
      case 'Backend':
        example = 'backend'
        break
      case 'Дизайн':
        example = 'design'
        break
      case 'Аналитика':
        example = 'analytics'
        break
      case 'Менеджмент':
        example = 'management'
        break
      case 'iOS':
        example = 'ios'
        break
      case 'Android':
        example = 'android'
        break
      case 'QA':
        example = 'qa'
        break
      case 'Бэк-офис':
        example = 'back_office'
        break
      case 'HR':
        example = 'hr'
        break
      case 'PR':
        example = 'pr'
        break
      case 'Техподдержка':
        example = 'support'
        break

      default:
        example = 'all'
    }

    const { data } = await axios.get(
      `https:/stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${example}`
    )
    return data.items
  }
)
