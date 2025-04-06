import { useSelector } from "react-redux"
import { Counter } from "../Counter/counter"
import { useCount } from "../Counter/use-count"
import { selectDishesById } from '../../redux/entities/dishes/slice'


export const DishesContainer = ({ id }) => {
    const { count, increment, decrement } = useCount(id);
    const dishes = useSelector((state) => selectDishesById(state, id));

    if (!dishes) {
        return null;
    }

    const { name, price, ingredients } = dishes

    return (
        <>
            <p>{name}</p>
            <p>{price}</p>
            <p>{ingredients}</p>
            <Counter count={count} increment={increment} decrement={decrement} />
        </>
    )
}