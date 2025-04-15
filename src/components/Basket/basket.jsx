import { useSelector } from "react-redux"
import { selectCartItems } from "../../redux/entities/cart/slice"
import { BasketItemContainer } from './basket-item-container'

export const Basket = () => {
    const items = useSelector(selectCartItems);

    if (!items.length) {
        return null;
    }

    return <ul>
        {items.map(({ id, amount}) => (
            <BasketItemContainer key={id} id={id} amount={amount} />
            ))}
    </ul>
}