import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice"
import { Restaurant } from './restaurant'

export const RestaurantContainer = ({ id }) => {
    const restaurants = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurants) {
        return null;
    }

    const { menu, name, reviews } = restaurants

    return (
        <Restaurant menuIds={menu} name={name} reviewsIds={reviews}/>
    )
}