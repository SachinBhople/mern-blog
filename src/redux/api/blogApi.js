import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/blog", credentials: "include" }),
    tagTypes: ["blog"],
    endpoints: (builder) => {
        return {
            getBlogs: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                transformResponse: (data) => data.result,
                transformErrorResponse: () => { },
                providesTags: ["blog"]

            }),
            getBlogDetail: builder.query({
                query: id => {
                    return {
                        url: `/details/${id}`,
                        method: "GET"
                    }
                },
                transformResponse: (data) => data.result,
                transformErrorResponse: () => { },


            }),
        }
    }
})

export const { useGetBlogsQuery, useGetBlogDetailQuery } = blogApi
