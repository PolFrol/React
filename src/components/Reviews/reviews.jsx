import { useOutletContext } from 'react-router';
import { ReviewsContainer } from './reviews-container';

export const Reviews = () => {
    const { reviewsIds } = useOutletContext();

    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {
                    reviewsIds.map((id) =>
                        <li key={id}>
                            <ReviewsContainer id={id} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}