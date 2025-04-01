import { Button } from '../Button/button';
import styles from './counter.module.css';

export const Counter = ({ count, increment, decrement }) => {
    return (
        <div className={styles.row}>
            <div>
                <Button onClick={increment} type={'button'}>+</Button>
                <span className={styles.count}>{count}</span>
                <Button onClick={decrement} type={'button'}>-</Button>
            </div>
        </div>

    )
}