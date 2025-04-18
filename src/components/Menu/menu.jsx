import { useOutletContext } from "react-router";
import { Dish } from "../Dish/dish";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { useSelector } from "react-redux";

export const Menu = () => {
    const { restaurantId } = useOutletContext();
    const { menu } = useSelector((state) => selectRestaurantById(state, restaurantId));

    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {
                    menu.map((id) =>
                        <li key={id}>
                            <Dish id={id} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}