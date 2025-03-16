import { SET_NAME_ACTION, SET_TEXT_ACTION, SET_RATING, DEFAULT_VALUE_FORM, RESET_FORM} from "../../materials/constants"

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
