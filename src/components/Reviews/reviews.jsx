import { useOutletContext } from 'react-router';
import { ReviewContainer } from './review-container';

export const Reviews = () => {
    const { reviewsIds } = useOutletContext();

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