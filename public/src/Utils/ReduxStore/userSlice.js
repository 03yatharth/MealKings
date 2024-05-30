import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "loggedInUser",
  initialState: {
    email: null
  },
  reducers: {
    addUser: (state, action) => {
      state.email = action.payload
    },
    removeUser: (state) => {
      state.email = null
    },
  },
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer