import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice"

export const TabsContainer = ({ id , onClick}) => {
    const tabs = useSelector((state) => selectRestaurantById(state, id));

    if (!tabs) {
        return null;
    }

    const { name } = tabs;

    return (
        <button type="button" key={id} onClick={onClick}>{name}</button>
    )
}