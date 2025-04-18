import styles from './restaurants-page.module.css';
import { useSelector } from "react-redux";
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice'
import { Outlet } from "react-router";
import { TabRestaurantContainer } from '../Tabs/tab-restaurant-container';

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds)

    return (
        <>
            <nav className={styles.nav}>
                {restaurantIds.map((id) => (
                    <TabRestaurantContainer key={id} id={id} />
                ))}
            </nav>
            <Outlet />
        </>
    )
}