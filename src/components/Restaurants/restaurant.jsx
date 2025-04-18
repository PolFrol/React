import { NavLink, Outlet } from "react-router"
import { ReviewForm } from "../Review-form/review-form"
import styles from './restaurant.module.css';
import classNames from "classnames";

export const Restaurant = ({ menuIds, reviewsIds, name }) => {
    const context = { menuIds, reviewsIds };

    return (
        <>
            <h2>{name}</h2>
            <div className={styles.nav}>
                <NavLink to={'menu'} className={({ isActive }) => classNames(styles.tab, isActive && styles.isActive)}>menu</NavLink>
                <NavLink to={'reviews'} className={({ isActive }) => classNames(styles.tab, isActive && styles.isActive)}>reviews</NavLink>
            </div>
            <Outlet context={context} />
            <ReviewForm />
        </>
    )
}