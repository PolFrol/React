import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice"
import { MenuItem } from "./menu-item";

export const MenuContainer = ({ restaurantId }) => {
    const { menu } = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!menu) {
        return null;
    }

    return (
        <>
            <h3>Menu</h3>
            <ul>
                {
                    menu.map((id) =>
                        <li key={id}>
                            <MenuItem id={id} key={id} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}