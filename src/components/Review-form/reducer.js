export const DEFAULT_VALUE_FORM = {
    name: "",
    text: "",
    rating: 1
}
export const SET_NAME_ACTION = "SET_NAME_ACTION";
export const SET_TEXT_ACTION = "SET_TEXT_ACTION";
export const SET_RATING = "SET_RATING";
export const RESET_FORM = "RESET_FORM";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_NAME_ACTION:
            return { ...state, name: payload };
        case SET_TEXT_ACTION:
            return { ...state, text: payload };
        case SET_RATING:
            return { ...state, rating: payload }
        case RESET_FORM:
            return {...DEFAULT_VALUE_FORM}
        default:
            return state;
    }
}
