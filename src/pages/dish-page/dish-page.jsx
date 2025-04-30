import { useParams } from "react-router";
import { Dish } from "../../components/Dish/dish";
import { useGetDishQuery } from "../../redux/services/api";
import { DishContainer } from "../../components/Dish/dish-container";

export const DishPage = () => {
    const { dishId } = useParams();
    const { data, isLoading, isError } = useGetDishQuery(dishId);

    if (isLoading) {
        return 'loading...'
    }

    if (isError) {
        return 'error'
    }

    return (
       <DishContainer data={data} />
    )
}