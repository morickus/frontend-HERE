import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.isLoading = false
      state.status = null
    },
  },
  // extraReducers: {
  //   // Register users
  //   [registerUser.pending]: (state) => {
  //     state.isLoading = true
  //     state.status = null
  //   },
  //   [registerUser.fulfilled]: (state, action) => {
  //     state.isLoading = false
  //     state.status = action.payload.message
  //     state.users = action.payload.users
  //     state.token = action.payload.token
  //   },
  //   [registerUser.rejectWithValue]: (state, action) => {
  //     state.status = action.payload.message
  //     state.isLoading = false
  //   },
  //   // Login users
  //   [loginUser.pending]: (state) => {
  //     state.isLoading = true
  //     state.status = null
  //   },
  //   [loginUser.fulfilled]: (state, action) => {
  //     state.isLoading = false
  //     state.status = action.payload.message
  //     state.users = action.payload.users
  //     state.token = action.payload.token
  //   },
  //   [loginUser.rejectWithValue]: (state, action) => {
  //     state.status = action.payload.message
  //     state.isLoading = false
  //   },
  //   // Проверка авторизации
  //   [getMe.pending]: (state) => {
  //     state.isLoading = true
  //     state.status = null
  //   },
  //   [getMe.fulfilled]: (state, action) => {
  //     state.isLoading = false
  //     state.status = null
  //     state.users = action.payload?.users
  //     state.token = action.payload?.token
  //   },
  //   [getMe.rejectWithValue]: (state, action) => {
  //     state.status = action.payload.message
  //     state.isLoading = false
  //   },
  // },
})

export const checkIsAuth = (state: any) => Boolean(state.user.token)

export const { logout } = userSlice.actions
export default userSlice.reducer