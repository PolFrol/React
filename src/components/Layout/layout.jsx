import { ProgressBar } from "../ProgressBar/progress-bar"

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar />
            <header>header</header>
            <main>{children}</main>
            <footer>footer</footer>
        </>
    )
}