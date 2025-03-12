import { useState } from "react";
export const Dish = ({ name }) => {
    const [count, setCount] = useState(0);
    const MIN = 0;
    const MAX = 5;
    const increase = () => {
        if (count < MAX) {
            setCount(count + 1);
        }
      };
      const decrease = () => {
        if (count > MIN) {
            setCount(count - 1);
        }
      };
    return (
        <div style={{ display: "flex" }}>
            <li>{name}</li>
            <div>
                <button onClick={increase}>+</button>
                {count}
                <button onClick={decrease}>-</button>
            </div>
        </div>

    )
}