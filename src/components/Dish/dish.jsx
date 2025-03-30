import { Counter } from "../Counter/counter"
import { useCount } from "../Counter/use-count"
import styles from './dish.module.css';

export const Dish = ({name}) => {
    const { count, increment, decrement } = useCount();
    

    return (
        <div className={styles.item}>
            <p>{name}</p>
            <Counter count={count} increment={increment} decrement={decrement} />
        </div>
    )
} 