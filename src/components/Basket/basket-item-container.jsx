import { useSelector } from "react-redux";
import { selectDishById } from '../../redux/entities/dishes/slice'

export const BasketItemContainer = ({ id, amount }) => {
    const dish = useSelector((state) => selectDishById(state, id));

    const { name } = dish;

    if (!dish) {
        return;
    }

    return (
        <li>{name} - <b>{amount}</b></li>
    );
}