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
        selectDishesById: (state, id) => state.entities[id],
        selectDishesIds: (state) => state.ids
    }
});

export const { selectDishesById, selectDishesIds } = dishes.selectors