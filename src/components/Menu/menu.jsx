import { Dish } from "../Dish/dish"
export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {
                    menu.map(({id, name}) =>
                        <Dish key={id} name={name}></Dish>
                    )
                }
            </ul>
        </div>
    )
}