import { Authorization } from "../Authorization/authorization";
import { ToggleTheme } from "../Toggle-theme/toggle-theme";
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <ToggleTheme />
            <Authorization />
        </header>
    )
}