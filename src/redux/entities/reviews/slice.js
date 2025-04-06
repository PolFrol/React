import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../materials/normalized-mock";

const initialState = {
    entities: normalizedReviews.reduce((acc, item) => {
        acc[item.id] = item;

        return acc
    }, {}),
    ids: normalizedReviews.map(({id}) => id)
}

export const reviews = createSlice({
    name: 'reviews',
    initialState,
    selectors: {
        selectReviewsById: (state, id) => state.entities[id],
        selectReviewsIds: (state) => state.ids
    }
});

export const { selectReviewsById, selectReviewsIds } = reviews.selectors