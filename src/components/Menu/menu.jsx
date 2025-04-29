import { Dish } from "../Dish/dish";

export const Menu = ({ menu }) => {
    
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