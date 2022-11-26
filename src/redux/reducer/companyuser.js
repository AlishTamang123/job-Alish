import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // logged_status: JSON.parse(localStorage.getItem("logged_in")) || false,
    Companyuser: null
}

export const userSlice = createSlice({
    name: 'Companyuser',
    initialState: initialState,
    reducers: {
        setCompanyUserStore: (state,action) => {
            state.Companyuser = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setCompanyUserStore} = userSlice.actions

export default userSlice.reducer