import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice"

export const TabRestaurantContainer = ({ id , onClick}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const { name } = restaurant;

    return (
        <button type="button" key={id} onClick={onClick}>{name}</button>
    )
}