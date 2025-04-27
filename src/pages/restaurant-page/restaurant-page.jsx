import { Outlet, useParams } from "react-router"
import { RestaurantContainer } from "../../components/Restaurants/restaurant-container";
import { useSelector } from "react-redux";
import { useRequest } from "../../redux/hooks/use-request";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice";
import { getRestaurant } from "../../redux/entities/restaurants/get-restaurant";

export const RestaurantPage = () => {
    const {restaurantId} = useParams();
    const requestStatus = useRequest(getRestaurant)

    console.log(requestStatus);
    

    return (
        <RestaurantContainer key={restaurantId} id={restaurantId} />
    )
}