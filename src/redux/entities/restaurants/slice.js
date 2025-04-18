import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

const initialState = {
    entities: {},
    ids: [],
    requestStatus: "idle"
}

export const restaurant = createSlice({
    name: 'restaurant',
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIds: (state) => state.ids,
        selectRequestStatus: (state) => state.requestStatus
    },
    extraReducers: (builder) => 
        builder
    .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = 'pending';
    })
    .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = 'rejected';
    })
    .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc, item) => {
            acc[item.id] = item;
    
            return acc
        }, {}),

        state.ids = payload.map(({id}) => id),
        state.requestStatus = 'fulfilled';
    })
});

export const { selectRestaurantById, selectRestaurantIds, selectRequestStatus } = restaurant.selectors