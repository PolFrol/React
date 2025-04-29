import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { DishPage } from "../../pages/dish-page/dish-page";
import { HomePage } from "../../pages/home-page/home-page";
import { MenuPage } from "../../pages/menu-page/menu-page";
import { RestaurantPage } from "../../pages/restaurant-page/restaurant-page";
import { store } from "../../redux/store";
import '../App/app.module.css';
import { AuthorizationContext } from "../Authorization-context/authorization-context";
import { Layout } from "../Layout/layout";
import { RestaurantsPage } from "../Restaurant-page/restaurants-page";
import { Reviews } from "../Reviews/reviews";
import { ThemeContext } from "../Theme-context/theme-context";


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
                                        <Route path="menu" element={<MenuPage />}/>
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