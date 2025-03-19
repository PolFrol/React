export const Counter = ({ count, increment, decrement }) => {
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