import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    tagTypes: ["reviews"],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => "/restaurants"
        }),
        getRestaurant: builder.query({
            query: (restaurantId) => `/restaurant/${restaurantId}`
        }),
        getMenu: builder.query({
            query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`
        }),
        getDish: builder.query({
            query: (dishId) => `/dish/${dishId}`
        }),
        getReviews: builder.query({
            query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
            providesTags: [{ type: "reviews", id: "all" }]
        }),
        getUsers: builder.query({
            query: () => "/users"
        }),
        addReview: builder.mutation({
            query: ({ restaurantId, review }) => ({
                url: `/review/${restaurantId}`,
                body: review,
                method: "POST"
            }),
            invalidatesTags: [{ type: "reviews", id: "all" }]
        })
    })
})

export const {
    useGetRestaurantsQuery,
    useLazyGetRestaurantsQuery,
    useGetRestaurantQuery,
    useLazyGetRestaurantQuery,
    useGetUsersQuery,
    useLazyGetUsersQuery,
    useGetMenuQuery,
    useLazyGetMenuQuery,
    useGetDishQuery,
    useLazyGetDishQuery,
    useGetReviewsQuery,
    useLazyGetReviewsQuery,
    useAddReviewMutation
} = api;