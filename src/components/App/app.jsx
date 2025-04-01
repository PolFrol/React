
import { RestaurantsPage } from "../Restaurant-page/restaurants-page"
import { restaurants } from "../../materials/mock";
import { Layout } from "../Layout/layout";
import '../App/app.module.css';
import { ThemeContext } from "../Theme-context/theme-context";
import { AuthorizationContext } from "../Authorization-context/authorization-context";


export const App = () => {
    return (
        <ThemeContext>
            <AuthorizationContext>
                <Layout>
                    <RestaurantsPage restaurants={restaurants} />
                </Layout>
            </AuthorizationContext>
        </ThemeContext>
    )
}