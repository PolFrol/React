import { useParams } from "react-router";
import { Dish } from "../../components/Dish/dish";

export const DishPage = () => {
    const { dishId } = useParams();
    return (
       
        <Dish key={dishId} id={dishId} />
       
    )
}