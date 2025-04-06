import { Dish } from "../Dish/dish";

export const Menu = ({ menuIds }) => {

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