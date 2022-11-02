import { PeopleType } from '../types/types'

export const filterOnClient = (tab: string, items: PeopleType[]) => {
  let filteredItems: PeopleType[] = items

  switch (tab) {
    case 'Все':
      break
    case 'Frontend':
      filteredItems = items.filter((item) => item.department === 'frontend')
      break
    case 'Backend':
      filteredItems = items.filter((item) => item.department === 'backend')
      break
    case 'Дизайн':
      filteredItems = items.filter((item) => item.department === 'design')
      break
    case 'Аналитика':
      filteredItems = items.filter((item) => item.department === 'analytics')
      break
    case 'Менеджмент':
      filteredItems = items.filter((item) => item.department === 'management')
      break
    case 'iOS':
      filteredItems = items.filter((item) => item.department === 'ios')
      break
    case 'Android':
      filteredItems = items.filter((item) => item.department === 'android')
      break
    case 'QA':
      filteredItems = items.filter((item) => item.department === 'qa')
      break
    case 'Бэк-офис':
      filteredItems = items.filter((item) => item.department === 'back_office')
      break
    case 'HR':
      filteredItems = items.filter((item) => item.department === 'hr')
      break
    case 'PR':
      filteredItems = items.filter((item) => item.department === 'pr')
      break
    case 'Техподдержка':
      filteredItems = items.filter((item) => item.department === 'support')
      break

    default:
      break
  }
  return filteredItems
}
