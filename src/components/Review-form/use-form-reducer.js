import { useReducer } from "react";
import { DEFAULT_VALUE_FORM, RESET_FORM, SET_NAME_ACTION, SET_RATING, SET_TEXT_ACTION, reducer } from "./reducer"

const MIN = 1;
const MAX = 5;

export const useFormReducer = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE_FORM);
    const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name });
    const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text });
    const { rating } = form;
    const incrementRating = () => {
        if ( rating < MAX) {
            dispatch({ type: SET_RATING, payload: rating + 1 });
        }
    };
    const decrementRating = () => {
        if (rating > MIN) {
            dispatch({ type: SET_RATING, payload: rating - 1 });
        }
    };
    const resetForm = () => dispatch({ type: RESET_FORM });

    return {
        setName,
        setText,
        incrementRating,
        decrementRating,
        resetForm,
        ...form
    }
}