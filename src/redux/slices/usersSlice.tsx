import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Role = 'ux-ui' | 'product-manager' | 'project-manager' | 'frontend' | 'backend' | 'fullstack' | 'analyst'
export type grade = 'senior' | 'middle' | 'junior'
export type Sex = 'М' | 'Ж' | '-'

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
  sex: 'female' | 'male' | ''
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