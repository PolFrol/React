import { ReviewContainer } from './review-container';

export const Reviews = ({ reviewsIds }) => {
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