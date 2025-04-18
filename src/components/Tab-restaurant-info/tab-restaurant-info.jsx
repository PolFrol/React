import { NavLink } from "react-router";
import classNames from "classnames";
import styles from './tab-restaurant-info.module.css';

export const TabRestaurantInfo = ({ link, title}) => {
    return (
        <NavLink to={link} className={({ isActive }) => classNames(styles.tab, isActive && styles.isActive)}>{title}</NavLink>
    )
}