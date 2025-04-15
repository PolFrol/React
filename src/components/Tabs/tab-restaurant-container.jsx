import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice"
import { NavLink } from "react-router";
import styles from './tabs-container.module.css';

export const TabRestaurantContainer = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const { name } = restaurant;

    return (
        <NavLink to={id} className={styles.link}>
            <div className={styles.content}>
                <p>{name}</p>
            </div>
        </NavLink>
    )
}