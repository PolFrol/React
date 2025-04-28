import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMenu } from "../../redux/entities/dishes/get-menu";
import { selectDishIds } from "../../redux/entities/dishes/slice";
import { useRequest } from "../../redux/hooks/use-request";
import { Dish } from "../Dish/dish";
import { IDLE, PENDING, REJECTED } from "../../redux/constants";

export const Menu = () => {
    const { restaurantId } = useParams();
    const menu = useSelector(selectDishIds);
    const requestStatus = useRequest(getMenu, restaurantId);

    if (requestStatus === IDLE || requestStatus === PENDING) {
        return 'loading...'
    }

    if (requestStatus === REJECTED) {
        return 'error'
    }

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