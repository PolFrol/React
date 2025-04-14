import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice"
import { NavLink } from "react-router";
import styles from './tabs-container.module.css';

export const TabsContainer = ({ id }) => {
    const tabs = useSelector((state) => selectRestaurantById(state, id));

    if (!tabs) {
        return null;
    }

    return (
        <NavLink to={id} className={styles.link}>
            <div className={styles.content}>
                <p>{tabs.name}</p>
            </div>
        </NavLink>
    )
}