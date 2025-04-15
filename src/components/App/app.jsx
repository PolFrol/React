
import { RestaurantsPage } from "../Restaurant-page/restaurants-page"
import { normalizedRestaurants } from "../../materials/normalized-mock";
import { Layout } from "../Layout/layout";
import '../App/app.module.css';
import { ThemeContext } from "../Theme-context/theme-context";
import { AuthorizationContext } from "../Authorization-context/authorization-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";


export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContext>
                <AuthorizationContext>
                    <Layout>
                        <RestaurantsPage restaurants={normalizedRestaurants} />
                    </Layout>
                </AuthorizationContext>
            </ThemeContext>
        </Provider>
    )
}