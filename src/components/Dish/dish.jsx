import { Counter } from "../Counter/counter"
import { useCount } from "../Counter/use-count"

export const Dish = ({name}) => {
    const { count, increment, decrement } = useCount();
    

    return (
        <>
            {name}
            <Counter count={count} increment={increment} decrement={decrement} />
        </>
    )
} 