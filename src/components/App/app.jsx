import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Layout } from "../Layout/layout";
import { Restaurant } from "../Restaurant/restaurant";

export const App = () => {
    const [restaurantId, setRestaurantId] = useState(restaurants[0].id);

    const handleChangeRestaurant = (id) => {
        setRestaurantId(id);
    };
    const selectedRestaurant = restaurants.find((item) => item.id === restaurantId);
    return (
        <Layout>
            <nav style={{ display: "flex" }}>
                {restaurants.map(({ name, id }) => (
                    <button type="button" key={id} onClick={() => handleChangeRestaurant(id)}>{name}</button>
                ))}
            </nav>
            {selectedRestaurant && <Restaurant restaurant={selectedRestaurant}></Restaurant>}
        </Layout>
    )
}