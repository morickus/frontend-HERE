import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@/utils/axios'
import { users } from '../../data'

// export const getUsers = createAsyncThunk(
//   'users/getUsers',
//   async () => {
//     try {
//       // const {data} = await axios.get('/users/')
//
//       return users
//     } catch (error) {
//       console.log(error)
//     }
//   }
// )

export const getUsers = () => {
  return users
}
