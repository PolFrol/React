import { useEffect, useState } from "react";
import styles from './restaurants-page.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice'
import { Outlet } from "react-router";
import { TabRestaurantContainer } from '../Tabs/tab-restaurant-container';
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";

export const RestaurantsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants())
    }, [dispatch])
    const restaurantIds = useSelector(selectRestaurantIds)
    const [activeRestaurantId, setRestaurantId] = useState(restaurantIds[0]);

    return (
        <>
            <nav className={styles.nav}>
                {restaurantIds.map((id) => (
                    <TabRestaurantContainer key={id} id={id} onClick={() => setRestaurantId(id)}/>
                ))}
            </nav>
            <Outlet />
        </>
    )
}