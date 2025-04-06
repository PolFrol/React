import { useSelector } from "react-redux"
import { selectReviewsById } from '../../redux/entities/reviews/slice'
import { UserContainer } from '../User/user-container'


export const ReviewsContainer = ({ id }) => {
    const reviews = useSelector((state) => selectReviewsById(state, id));

    if (!reviews) {
        return null;
    }

    const { text, rating, userId } = reviews

    return (
        <>
            <p>{text}</p>
            <p>{rating}</p>
            <UserContainer id={userId} />
        </>
    )
}