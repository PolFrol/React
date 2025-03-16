import {useCount} from "../Counter/use-count";

export const Counter = ({min, max}) => {
    const { count, increment, decrement } = useCount({min, max});
    return (
        <div style={{ display: "flex" }}>
            <div>
                <button onClick={increment} type="button">+</button>
                {count}
                <button onClick={decrement} type="button">-</button>
            </div>
        </div>

    )
}