import axios from '@/utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IRegister } from '@/pages/register'
import { ILogin } from '@/pages/login'

export const login = createAsyncThunk(
  'loginUser',
  async ({username, password, remember}: ILogin) => {
    try {
      const {data} = await axios.post('/token/', {
        username,
        password
      })
      console.log('data ',data)

      if (data.access) {
        localStorage.setItem('access_token', data.access)
      }
    } catch (error) {
      console.log(error)
    }

    // if (localStorage.getItem('access_token') !== null) {
    //   try {
    //     const {data} = await axios.get('/home/')
    //     console.log('users ',data)
    //
    //     // router.push('/')
    //     return data
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }
)

export const register = createAsyncThunk(
  'registerUser',
  async ({username, email, password}: IRegister) => {

    try {
      const {data} = await axios.post('/register/', {
        username,
        email,
        password,
      })
      console.log('data ',data)

      if (data.token) {
        localStorage.setItem('access_token', data.access)
      }

      // router.push('/login')
      return data
    } catch (error) {
      console.log(error)
    }
  },
)
