import { NavLink, Outlet } from "react-router";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import styles from './restaurants-page.module.css';

export const RestaurantsPage = () => {
    const { data, isLoading, isError } = useGetRestaurantsQuery();

    if (isLoading) {
        return 'loading...'
    }

    if (isError) {
        return 'error'
    }

    return (
        <>
            <nav className={styles.nav}>
                {data.map(( {id, name}) => (
                    <NavLink key={id} to={`./${id}`} className={styles.link}>
                        <div className={styles.content}>
                            <p>{name}</p>
                        </div>
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </>
    )
}