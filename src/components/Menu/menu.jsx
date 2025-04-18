import { useOutletContext } from "react-router";
import { Dish } from "../Dish/dish";

export const Menu = () => {
    const { menuIds } = useOutletContext();

    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {
                    menuIds.map((id) =>
                        <li key={id}>
                            <Dish id={id} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}