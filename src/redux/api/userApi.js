import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/user", credentials: "include" }),
    tagTypes: ["blog"],
    endpoints: (builder) => {
        return {
            addBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/blog-create",
                        method: "POST",
                        body: blogData
                    }
                },
                providesTags: ["blog"]
            }),
            removeBlog: builder.mutation({
                query: id => {
                    return {
                        url: `/blog-remove/${id}`,
                        method: "DELETE",
                    }
                },
                providesTags: ["blog"]
            }),
            destroyBlog: builder.mutation({
                query: id => {
                    return {
                        url: "/destroy",
                        method: "DELETE",
                    }
                },
                providesTags: ["blog"]
            }),


        }
    }
})

export const { useAddBlogMutation, useDestroyBlogMutation, useRemoveBlogMutation } = userApi
