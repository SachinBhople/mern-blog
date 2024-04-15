import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/auth", credentials: "include" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            login: builder.mutation({
                query: userData => {
                    return {
                        url: "/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("dev", JSON.stringify(data.result))
                    return data.result
                }
                // providesTags: ["tagName"]
            }),
            register: builder.mutation({
                query: userData => {
                    return {
                        url: "/register",
                        method: "POST",
                        body: userData
                    }
                },
                // transformResponse: data => data.result
                // providesTags: ["tagName"]
            }),
            logout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout",
                        method: "POST",
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("dev")
                    return data
                }
                // providesTags: ["tagName"]
            }),


        }
    }
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi
