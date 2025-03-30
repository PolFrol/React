import { use } from "react"
import { Button } from "../Button/button"
import { AuthorizationContext } from "../Authorization-context"
import styles from './authorization.module.css';

export const Authorization = () => {
    const { user, toggleUser } = use(AuthorizationContext)
    return (
        <div>
            {
                user ? (
                    <div className={styles.row}>
                        <p>{user}</p>
                        <Button type={'button'} uiType={'secondary'} onClick={toggleUser}>Log out</Button>
                    </div>
                ) :
                    < Button type={'button'} uiType={'secondary'} onClick={toggleUser}>Log in</Button>
            }
        </div>
    )
}