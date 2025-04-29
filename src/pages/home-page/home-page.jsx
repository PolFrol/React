import { NavLink } from "react-router"
import styles from './home-page.module.css';

export const HomePage = () => {
    return (
        <div className={styles.page}>
            <p className={styles.title}>Delicios Meals<br/><span className={styles.text}>Delivered</span> to Your Door</p>
            <NavLink className={styles.link} to={"/restaurants"}>Order now</NavLink>
        </div>
    )
}