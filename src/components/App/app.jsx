
import { RestaurantsPage } from "../Restaurant-page/restaurants-page"
import { restaurants } from "../../materials/mock";
import { Layout } from "../Layout/layout";

export const App = () => {
    return (
         <Layout>
             <RestaurantsPage restaurants={restaurants} />
         </Layout>
    )
}