import classNames from 'classnames';
import styles from './button.module.css';
import { use } from 'react';
import { ThemeContext } from '../Theme-context';

export const Button = ({ children, onClick, uiType, type }) => {
    const { theme } = use(ThemeContext);

    return (
        <button type={type}
            onClick={onClick}
            className={classNames(styles.button, {
                [styles.secondary]: uiType === "secondary",
                [styles.light]: theme === "light",
                [styles.dark]: theme === "dark",
            })}>
            {children}
        </button>
    )
}