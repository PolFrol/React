import { Reviews } from "../Reviews/reviews"
import { Menu } from "../Menu/menu"
import { ReviewForm } from "../Review-form/review-form"

export const Restaurant = ({ menuIds, reviewsIds, name }) => {
    
    return (
        <>
            <h2>{name}</h2>
            <Menu menuIds={menuIds} />
            <Reviews reviewsIds={reviewsIds} />
            <ReviewForm />
        </>
    )
}