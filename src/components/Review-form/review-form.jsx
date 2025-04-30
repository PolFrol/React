import { Counter } from "../Counter/counter"
import { useFormReducer } from "./use-form-reducer"
import { Button } from '../Button/button';
import styles from './review-form.module.css';

export const ReviewForm = ({ onSubmit, isSubmitButtonDisabled }) => {
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
                <Button type={'button'} disabled={isSubmitButtonDisabled} onClick={() => onSubmit({ name, text, rating, user: 'a304959a-76c0-4b34-954a-b38dbf310360'})}>Send</Button>
            </div>
        </form>
    )
}