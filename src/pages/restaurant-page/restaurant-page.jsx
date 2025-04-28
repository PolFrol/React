import { useParams } from "react-router";
import { RestaurantContainer } from "../../components/Restaurants/restaurant-container";

export const RestaurantPage = () => {
    const {restaurantId} = useParams();

    return (
        <RestaurantContainer key={restaurantId} id={restaurantId} />
    )
}