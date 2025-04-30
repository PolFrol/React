import { Dish } from "./dish";

export const DishContainer = ({ data }) => {
    const { id, name, price, ingredients } = data

    return (
        <Dish key={id} id={id} name={name} price={price} ingredients={ingredients}/>
    )
}