import { Counter } from '../Counter/counter';
import styles from './dish.module.css';
import { useCount } from "../Counter/use-count"


export const Dish = ({ id, name, price, ingredients }) => {
    const { count, increment, decrement } = useCount(id);

    return (
        <div className={styles.item} key={id}>
            <>
                <p>{name}</p>
                <p>{price}</p>
                <p>{ingredients}</p>
                <Counter count={count} increment={increment} decrement={decrement} />
            </>
        </div>
    )
} 