import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {

        auth: JSON.parse(localStorage.getItem("dev"))
    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.auth = payload
        })
        .addMatcher(authApi.endpoints.logout.matchFulfilled, (state, { payload }) => {
            state.auth = null
        })


})

// export const { invalidate } = authSlice.actions
export default authSlice.reducer