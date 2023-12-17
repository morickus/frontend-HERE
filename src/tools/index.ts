import { arrayRole } from '@/widgets/UsersTableFilter'
import { Sex } from '@/redux/slices/usersSlice'
import { tableSex } from '@/pages/users'

export const getRole = (role: string) => arrayRole.find(e => e.value == role)?.label

export const getSexTable = (sex: Sex): tableSex => {
  let res: tableSex
  switch(sex) {
    case 'male':
      res = 'М'
      break
    case 'female':
      res = 'Ж'
      break
    default:
      res = '-'
  }
  return res
}

export const getSex = (sex: Sex) => {
  let res
  switch(sex) {
    case 'male':
      res = 'Мужской'
      break
    case 'female':
      res = 'Женский'
      break
    default:
      res = '-'
  }
  return res
}