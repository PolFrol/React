import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { BasketItemContainer } from './basket-item-container';

export const Basket = () => {
    const items = useSelector(selectCartItems);

    if (!items.length) {
        return null;
    }

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <BasketItemContainer id={item.id} />
                </li>
            ))}
        </ul>
    )
}