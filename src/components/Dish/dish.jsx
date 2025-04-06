import { useSelector } from "react-redux";
import styles from './dish.module.css';
import { DishesContainer } from './dishes-container';
import { selectDishesIds } from '../../redux/entities/dishes/slice'


export const Dish = ({ id }) => {
    const dishesIds = useSelector(selectDishesIds)
    const dishesList = dishesIds.filter((dishId) => dishId === id)

    return (
        <>
            {dishesList.map((id) => (
                <div className={styles.item} key={id}>
                    <DishesContainer id={id} />
                </div>
            ))}
        </>
    )
} 