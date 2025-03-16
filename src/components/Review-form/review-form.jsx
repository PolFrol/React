import { useReducer, useState } from "react"
import { Counter } from "../Counter/counter"

const DEFAULT_VALUE_FORM = {
    name: "",
    text: "",
    raiting: 1
}
const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";

const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_NAME_ACTION:
            return { ...DEFAULT_VALUE_FORM, name: payload };
        case SET_TEXT_ACTION:
            return { ...DEFAULT_VALUE_FORM, text: payload };
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE_FORM);
    const { name, text } = form;
    const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name });
    const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text });

    return (
        <form>
            <div>
                <label htmlFor="name">name</label>
                <input value={name} id="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="text">text</label>
                <textarea value={text} id="text" onChange={(e) => setText(e.target.value)} />
            </div>
            <Counter min={1} max={5} />
            <div style={{ display: "flex" }}>
                <button type="button" onClick={resetForm}>Clear</button>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}