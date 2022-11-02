import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import { declOfNum } from './declOfNum'

export const convertDate = (date: string) => {
  const splitBirthday = date?.split('-')
  const convertToNumber = splitBirthday?.map((date) => Number(date))

  const year = convertToNumber && convertToNumber[0]
  const month = convertToNumber && convertToNumber[1]
  const day = convertToNumber && convertToNumber[2]

  const formatedBirthday =
    month &&
    day &&
    year &&
    format(new Date(year, month, day), 'dd MMMM yyyy', {
      locale: ru,
    })

  const currentYear = format(new Date(), 'yyyy')
  const age = year && Number(currentYear) - year
  const ageString = age && declOfNum(age, ['год', 'года', 'лет'])

  return {
    formatedBirthday,
    year,
    month,
    day,
    age,
    ageString,
  }
}
