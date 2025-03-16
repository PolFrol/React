import { Counter } from "../Counter/counter"
import { MAX, MIN } from "../../materials/constants";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {
                    menu.map(({id, name}) =>
                        <li key={id}>
                            {name}
                            <Counter min={MIN} max={MAX} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}