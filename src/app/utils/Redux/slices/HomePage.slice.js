import { createSlice } from '@reduxjs/toolkit'

export const HomeSlice = createSlice({
     name: 'counter',
     initialState: {

          is_user_logged_in: false,
          user_data: {
               user_id:"",
               username: '',
               avatar: '',
               accountType: ''
          },

     },
     reducers: {

          setUserLoginStatus: (state, action) => {
               state.is_user_logged_in = action.payload
          },

          setUserLoginDetails: (state, action) => {

               state.user_data = {
                    username: action.payload.username,
                    avatar: action.payload.avatar,
                    accountType: action.payload.accountType
               }
          },
     },
})

// Action creators are generated for each case reducer function
export const { setUserLoginStatus, setUserLoginDetails } = HomeSlice.actions

export const HomeSliceReducers = HomeSlice.reducer