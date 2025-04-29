import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./entities/cart/slice";
import { dishesSlice } from "./entities/dishes/slice";
import { requestSlice } from "./entities/request/slice";
import { restaurantsSlice } from "./entities/restaurants/slice";
import { reviewsSlice } from './entities/reviews/slice';
import { usersSlice } from "./entities/users/slice";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action);

    return next(action);
};
export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [requestSlice.name]: requestSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});