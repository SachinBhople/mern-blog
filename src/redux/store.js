import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./api/blogApi";
import { userApi } from "./api/userApi";
import { authApi } from "./api/authApi";
import authSlice from "./slices/authSlice";


const reduxStore = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        user: authSlice
    },
    middleware: def => [...def(), blogApi.middleware, userApi.middleware, authApi.middleware]
})

export default reduxStore