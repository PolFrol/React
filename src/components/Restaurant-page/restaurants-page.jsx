import { useState } from "react";
import { RestaurantContainer } from "../Restaurants/restaurant-container"
import styles from './restaurants-page.module.css';
import { useSelector } from "react-redux";
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice'
import { TabRestaurantContainer } from '../Tabs/tab-restaurant-container';

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds)
    const [activeRestaurantId, setRestaurantId] = useState(restaurantIds[0]);

    return (
        <>
            <nav className={styles.nav}>
                {restaurantIds.map((id) => (
                    <TabRestaurantContainer key={id} id={id} onClick={() => setRestaurantId(id)}/>
                ))}
            </nav>
            {activeRestaurantId && <RestaurantContainer key={activeRestaurantId} id={activeRestaurantId} />}
        </>
    )
}