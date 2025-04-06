import { useSelector } from "react-redux";
import { selectDishesById } from '../../redux/entities/dishes/slice'

export const BusketContainer = ({ id, amount }) => {
    const dish = useSelector((state) => selectDishesById(state, id));

    const { name } = dish;

    if (!dish) {
        return;
    }

    return (
        <li>{name} - <b>{amount}</b></li>
    );
}