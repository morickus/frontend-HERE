import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Role = 'ux_ui' | 'product_manager' | 'frontend' | 'backend' | 'fullstack' | 'analyst'
export type grade = 'senior' | 'middle' | 'junior'
export type Sex = 'female' | 'male' | ''

export type User = {
  id: number
  username: string
  email: string
  name: string
  second: string
  father: string
  city: string
  ava?: string
  role: Role
  sex: Sex
  phone: string
  age: number
  events_count: number
  grade: grade
  tg?: string
}

type UsersState = {
  users: User[];
}

const initialState: UsersState = {
  users: [
  ],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  }
});

export const { } = usersSlice.actions

export default usersSlice.reducer