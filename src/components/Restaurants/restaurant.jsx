import { Reviews } from "../Reviews/reviews"
import { Menu } from "../Menu/menu"
import { ReviewForm } from "../Review-form/review-form"

export const Restaurant = ({restaurant}) => {
    const {menu, reviews, name} = restaurant

    return (
        <>
            <h2>{name}</h2>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
            <ReviewForm />
        </>
    )
}