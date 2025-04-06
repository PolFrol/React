import { configureStore } from "@reduxjs/toolkit";
import { restaurant } from "./entities/restaurants/slice";
import { dishes } from "./entities/dishes/slice";
import { reviews } from './entities/reviews/slice';
import { users } from "./entities/users/slice";
import { cartSlice } from "./entities/cart/slice";

export const store = configureStore({
    reducer: {
        [restaurant.name]: restaurant.reducer,
        [dishes.name]: dishes.reducer,
        [reviews.name]: reviews.reducer,
        [users.name]: users.reducer,
        [cartSlice.name]: cartSlice.reducer
    },
});