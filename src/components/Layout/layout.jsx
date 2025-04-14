import { ProgressBar } from "../ProgressBar/progress-bar";
import styles from './layout.module.css';
import { Header } from "../Header/header";
import { Outlet } from "react-router";
import { Busket } from "../Busket/busket";


export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar />
            <div className={styles.container}>
                <Header />
                <Outlet />
                <main>{children}</main>
                <Busket />
                <footer>footer</footer>
            </div>
        </>
    )
}