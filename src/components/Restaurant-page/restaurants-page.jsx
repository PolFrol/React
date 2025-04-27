import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';
import { useRequest } from "../../redux/hooks/use-request";
import { TabRestaurantContainer } from '../Tabs/tab-restaurant-container';
import styles from './restaurants-page.module.css';

export const RestaurantsPage = () => {
    const requestStatus = useRequest(getRestaurants)
    const restaurantIds = useSelector(selectRestaurantIds)

    if (requestStatus === 'idle' || requestStatus === 'pending') {
        return 'loading...'
    }

    if (requestStatus === 'rejected') {
        return 'error'
    }

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