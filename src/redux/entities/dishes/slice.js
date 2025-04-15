import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../materials/normalized-mock";

const initialState = {
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item;

        return acc
    }, {}),
    ids: normalizedDishes.map(({id}) => id)
}

export const dishes = createSlice({
    name: 'dishes',
    initialState,
    selectors: {
        selectDishById: (state, id) => state.entities[id],
        selectDishIds: (state) => state.ids
    }
});

export const { selectDishById, selectDishIds } = dishes.selectors