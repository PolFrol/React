import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

export const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
    name: 'users',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            })
});

export const { selectRequestStatus } = usersSlice.selectors;
const selectUsersSlice = (state) => state.users;

export const { 
    selectById: selectUserById,
    selectTotal: selectUsersTotal
} = entityAdapter.getSelectors(selectUsersSlice);