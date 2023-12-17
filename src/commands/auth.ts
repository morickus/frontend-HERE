import axios from '@/utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IRegister } from '@/pages/register'
import { ILogin } from '@/pages/login'
import message from 'antd/lib/message'

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
      message.error(`Ошибка ${error}`)
    }

    // if (localStorage.getItem('access_token') !== null) {
    //   try {
    //     const {data} = await axios.get('/home/')
    //     console.log('users ',data)
    //
    //
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

      if (data.token) {
        localStorage.setItem('access_token', data.access)
        message.success('Регистрация прошла успешна')
      }

      return data
    } catch (error) {
      message.error(`Ошибка ${error}`)
    }
  },
)
