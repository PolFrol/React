import { Counter } from "../Counter/counter"
import { useFormReducer } from "./use-form-reducer"

export const ReviewForm = () => {
    const { name, text, rating, resetForm, setText, setName, decrementRating, incrementRating } = useFormReducer();

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
            <Counter count={rating} increment={incrementRating} decrement={decrementRating} />
            <div style={{ display: "flex" }}>
                <button type="button" onClick={resetForm}>Clear</button>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}