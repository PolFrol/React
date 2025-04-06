import { useSelector } from "react-redux"
import { selectCartItems } from "../../redux/entities/cart/slice"
import { BusketContainer } from './busket-container'

export const Busket = () => {
    const items = useSelector(selectCartItems);

    if (!items.length) {
        return null;
    }

    return <ul>
        {items.map(({ id, amount}) => (
            <BusketContainer key={id} id={id} amount={amount} />
            ))}
    </ul>
}