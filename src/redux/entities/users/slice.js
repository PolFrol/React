import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../materials/normalized-mock";

const initialState = {
    entities: normalizedUsers.reduce((acc, item) => {
        acc[item.id] = item;

        return acc
    }, {}),
    ids: normalizedUsers.map(({id}) => id)
}

export const users = createSlice({
    name: 'users',
    initialState,
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectUserIds: (state) => state.ids
    }
});

export const { selectUserById, selectUserIds } = users.selectors