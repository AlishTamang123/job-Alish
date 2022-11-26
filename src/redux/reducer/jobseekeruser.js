import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // logged_status: JSON.parse(localStorage.getItem("logged_in")) || false,
    jobseekeruser: null
}

export const userSlice = createSlice({
    name: 'jobseekeruser',
    initialState: initialState,
    reducers: {
        setjobseekerUserStore: (state,action) => {
            state.jobseekeruser = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setjobseekerUserStore} = userSlice.actions

export default userSlice.reducer