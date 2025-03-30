import { Counter } from "../Counter/counter"
import { useFormReducer } from "./use-form-reducer"
import { Button } from '../Button/button';
import styles from './review-form.module.css';

export const ReviewForm = () => {
    const { name, text, rating, resetForm, setText, setName, decrementRating, incrementRating } = useFormReducer();

    return (
        <form >
            <div className={styles.item}>
                <label className={styles.label} htmlFor="name">name</label>
                <input value={name} id="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="text">text</label>
                <textarea value={text} id="text" onChange={(e) => setText(e.target.value)} />
            </div>
            <Counter count={rating} increment={incrementRating} decrement={decrementRating} />
            <div className={styles.footer}>
                <Button type={'button'} uiType={'secondary'} onClick={resetForm}>Clear</Button>
                <Button type={'submit'}>Send</Button>
            </div>
        </form>
    )
}