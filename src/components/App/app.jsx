
import { RestaurantsPage } from "../Restaurant-page/restaurants-page"
import { Layout } from "../Layout/layout";
import '../App/app.module.css';
import { ThemeContext } from "../Theme-context/theme-context";
import { AuthorizationContext } from "../Authorization-context/authorization-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page/home-page";
import { RestaurantPage } from "../../pages/restaurant-page/restaurant-page";
import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";
import { DishPage } from "../../pages/dish-page/dish-page";


export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContext>
                <AuthorizationContext>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route index element={<HomePage />} />
                                <Route path='/restaurants' element={<RestaurantsPage /> }>
                                    <Route path=":restaurantId" element={<RestaurantPage />}>
                                        <Route index element={<Navigate to='menu' />} />
                                        <Route path="menu" element={<Menu />}/>
                                        <Route path="reviews" element={<Reviews />}/>
                                    </Route>
                                </Route>
                                <Route path='/dish/:dishId' element={<DishPage />} />
                                <Route path="*" element={<Navigate to='/' replace />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </AuthorizationContext>
            </ThemeContext>
        </Provider>
    )
}