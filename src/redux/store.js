import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./entities/cart/slice";
import { dishes } from "./entities/dishes/slice";
import { requestSlice } from "./entities/request/slice";
import { restaurantsSlice } from "./entities/restaurants/slice";
import { reviews } from './entities/reviews/slice';
import { users } from "./entities/users/slice";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action);

    return next(action);
};
export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishes.name]: dishes.reducer,
        [reviews.name]: reviews.reducer,
        [users.name]: users.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [requestSlice.name]: requestSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});