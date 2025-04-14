import { useState } from "react";
import styles from './restaurants-page.module.css';
import { useSelector } from "react-redux";
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice'
import { TabsContainer } from '../Tabs/tabs-container';
import { Outlet } from "react-router";

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds)
    const [activeRestaurantId, setRestaurantId] = useState(restaurantIds[0]);

    return (
        <>
            <nav className={styles.nav}>
                {restaurantIds.map((id) => (
                    <TabsContainer key={id} id={id} onClick={() => setRestaurantId(id)}/>
                ))}
            </nav>
            <Outlet />
        </>
    )
}