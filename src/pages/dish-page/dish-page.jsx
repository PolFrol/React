import { useParams } from "react-router";
import { Dish } from "../../components/Dish/dish";
import { getDish } from "../../redux/entities/dishes/get-dish";
import { useRequest } from "../../redux/hooks/use-request";
import { IDLE, PENDING, REJECTED } from "../../redux/constants";

export const DishPage = () => {
    const { dishId } = useParams();
    const requestStatus = useRequest(getDish, dishId)
    
    if (requestStatus === IDLE || requestStatus === PENDING) {
        return 'loading...'
    }

    if (requestStatus === REJECTED) {
        return 'error'
    }

    return (
       
        <Dish key={dishId} id={dishId} />
       
    )
}