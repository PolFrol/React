import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "./get-menu";
import { getDish } from "./get-dish";

export const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder
            .addCase(getMenu.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            })
            .addCase(getDish.fulfilled,(state, { payload }) => {
                entityAdapter.setOne(state, payload);
            })
});

export const { selectRequestStatus } = dishesSlice.selectors;

const selectDishesSlice = (state) => state.dishes;

export const { 
    selectById: selectDishById, 
    selectIds: selectDishIds,
    selectTotal: selectDishesTotal
} = entityAdapter.getSelectors(selectDishesSlice);