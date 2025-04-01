import { use } from "react"
import { Button } from "../Button/button"
import { ThemeContext } from "../Theme-context"

export const ToggleTheme = () => {
    const { theme, toggleTheme } = use(ThemeContext)
    return (
        <Button onClick={toggleTheme}>switch</Button>
    )
}