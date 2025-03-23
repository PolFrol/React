import { useCallback, useReducer } from "react";
import { DEFAULT_VALUE_FORM, RESET_FORM, SET_NAME_ACTION, SET_RATING, SET_TEXT_ACTION, reducer } from "./reducer"

const MIN = 1;
const MAX = 5;

export const useFormReducer = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE_FORM);
    const setName = useCallback((name) => dispatch({ type: SET_NAME_ACTION, payload: name }), [dispatch]);
    const setText = useCallback((text) => dispatch({ type: SET_TEXT_ACTION, payload: text }), [dispatch]);
    const { rating } = form;
    const incrementRating = useCallback(() => {
        if ( rating < MAX) {
            dispatch({ type: SET_RATING, payload: rating + 1 });
        }
    }, [dispatch]);
    const decrementRating = useCallback(() => {
        if (rating > MIN) {
            dispatch({ type: SET_RATING, payload: rating - 1 });
        }
    }, [dispatch]);
    const resetForm = useCallback(() => dispatch({ type: RESET_FORM }), [dispatch]);

    return {
        setName,
        setText,
        incrementRating,
        decrementRating,
        resetForm,
        ...form
    }
}