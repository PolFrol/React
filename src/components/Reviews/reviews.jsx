import { useParams } from 'react-router';
import { useGetReviewsQuery } from '../../redux/services/api';
import { ReviewItem } from './review-item';

export const Reviews = () => {
    const { restaurantId } = useParams();
    const { data, isLoading, isError } = useGetReviewsQuery(restaurantId)

    if (isLoading) {
        return 'loading...'
    }

    if (isError) {
        return 'error'
    }

    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {
                    data.map(({id, text, rating, userId }) =>
                        <li key={id}>
                            <ReviewItem id={id} text={text} rating={rating} userId={userId} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}