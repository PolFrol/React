import { useSelector } from "react-redux";
import styles from './dish.module.css';
import { DishContainer } from './dish-container';
import { selectDishIds } from '../../redux/entities/dishes/slice'


export const Dish = ({ id }) => {
    return (
        <div className={styles.item} key={id}>
            <DishContainer id={id} />
        </div>
    )
} 