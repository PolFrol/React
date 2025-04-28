import { useSelector } from "react-redux"
import { Counter } from "../Counter/counter"
import { useCount } from "../Counter/use-count"
import { selectDishById } from "../../redux/entities/dishes/slice";


export const DishContainer = ({ id }) => {
    const { count, increment, decrement } = useCount(id);
    const dish = useSelector((state) => selectDishById(state, id));

    if (!dish) {
        return null;
    }

    const { name, price, ingredients } = dish

    return (
        <>
            <p>{name}</p>
            <p>{price}</p>
            <p>{ingredients}</p>
            <Counter count={count} increment={increment} decrement={decrement} />
        </>
    )
}