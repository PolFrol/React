import { useState } from "react";
import { Restaurant } from "../Restaurants/restaurant"

export const RestaurantsPage = ({ restaurants }) => {
    const [restaurantId, setRestaurantId] = useState(restaurants[0].id);

    const selectedRestaurant = restaurants.find((item) => item.id === restaurantId);
    return (
        <>
            <nav style={{ display: "flex" }}>
                {restaurants.map(({ name, id }) => (
                    <button type="button" key={id} onClick={() => setRestaurantId(id)}>{name}</button>
                ))}
            </nav>
            {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
        </>
    )
}