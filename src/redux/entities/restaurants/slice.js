import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getRestaurant } from "./get-restaurant";

export const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => 
        builder
        .addCase(getRestaurants.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        })
        .addCase(getRestaurant.fulfilled, (state, { payload }) => {
            entityAdapter.setOne(state, payload);
        })
});

export const { selectRequestStatus } = restaurantsSlice.selectors;

const selectRestaurantsSlice = (state) => state.restaurants;

export const { 
    selectById: selectRestaurantById, 
    selectIds: selectRestaurantIds,
    selectTotal: selectRestaurantsTotal
} = entityAdapter.getSelectors(selectRestaurantsSlice);