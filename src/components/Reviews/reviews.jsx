import { ReviewsContainer } from './reviews-container';

export const Reviews = ({ reviewsIds }) => {
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