import { NavLink, Outlet } from "react-router"
import { ReviewForm } from "../Review-form/review-form"
import styles from './restaurant.module.css';
import { TabRestaurantInfo } from "../Tab-restaurant-info/tab-restaurant-info";

export const Restaurant = ({ id, name, isSubmitButtonDisabled, onSubmit }) => {
    
    return (
        <>
            <h2>{name}</h2>
            <div className={styles.nav}>
                <TabRestaurantInfo link={'menu'} title={'menu'} />
                <TabRestaurantInfo link={'reviews'} title={'reviews'} />
            </div>
            <Outlet context={{ restaurantId: id }} />
            <ReviewForm isSubmitButtonDisabled={isSubmitButtonDisabled} onSubmit={onSubmit} />
        </>
    )
}