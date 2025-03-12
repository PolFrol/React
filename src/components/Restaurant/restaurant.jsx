import { Reviews } from "../Reviews/reviews"
import { Menu } from "../Menu/menu"

export const Restaurant = ({restaurant}) => {
    const {menu, reviews} = restaurant

    return (
        <>
            <Menu menu={menu}></Menu>
            <Reviews reviews={reviews}></Reviews>
        </>
    )
}