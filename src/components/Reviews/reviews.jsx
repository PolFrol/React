import { ReviewContainer } from './review-container';
import { selectReviewIds } from '../../redux/entities/reviews/slice';
import { getReviews } from '../../redux/entities/reviews/get-rewiews';
import { useSelector } from 'react-redux';
import { useRequest } from "../../redux/hooks/use-request";
import { useParams } from 'react-router';
import { IDLE, PENDING, REJECTED } from "../../redux/constants";

export const Reviews = () => {
    const { restaurantId } = useParams();
    const reviewsIds = useSelector(selectReviewIds);
    const requestStatus = useRequest(getReviews, restaurantId);

    if (requestStatus === IDLE || requestStatus === PENDING) {
        return 'loading...'
    }

    if (requestStatus === REJECTED) {
        return 'error'
    }

    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {
                    reviewsIds.map((id) =>
                        <li key={id}>
                            <ReviewContainer id={id} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}