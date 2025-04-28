import { DishContainer } from './dish-container';
import styles from './dish.module.css';


export const Dish = ({ id }) => {
    return (
        <div className={styles.item} key={id}>
            <DishContainer id={id} />
        </div>
    )
} 