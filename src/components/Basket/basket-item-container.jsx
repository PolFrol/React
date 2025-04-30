import { useSelector } from "react-redux";
import { selectDishById } from '../../redux/entities/dishes/slice'
import { selectAmountByDishId } from "../../redux/entities/cart/slice";

export const BasketItemContainer = ({ id }) => {
    const amount = useSelector((state) => selectAmountByDishId(state, id))
    const dish = useSelector((state) => selectDishById(state, id));
    
    if (!dish) {
        return;
    }

    const { name } = dish;

    return (
        <>{name} - <b>{amount}</b></>
    );
}