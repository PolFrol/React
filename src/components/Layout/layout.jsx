import { ProgressBar } from "../ProgressBar/progress-bar";
import styles from './layout.module.css';
import { Header } from "../Header/header";


export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar />
            <div className={styles.container}>
                <Header></Header>
                <main>{children}</main>
                <footer>footer</footer>
            </div>
        </>
    )
}