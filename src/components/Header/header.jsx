import { Authorization } from "../Authorization/authorization";
import { Basket } from "../Basket/basket";
import { ToggleTheme } from "../Toggle-theme/toggle-theme";
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <ToggleTheme />
            <Authorization />
            <Basket />
        </header>
    )
}