import { useState } from "react";
import { Restaurant } from "../Restaurants/restaurant"
import styles from './restaurants-page.module.css';

export const RestaurantsPage = ({ restaurants }) => {
    const [restaurantId, setRestaurantId] = useState(restaurants[0].id);

    const selectedRestaurant = restaurants.find((item) => item.id === restaurantId);
    return (
        <>
            <nav className={styles.nav}>
                {restaurants.map(({ name, id }) => (
                    <button type="button" key={id} onClick={() => setRestaurantId(id)}>{name}</button>
                ))}
            </nav>
            {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
        </>
    )
}