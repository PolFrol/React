import { useOutletContext } from 'react-router';
import { ReviewContainer } from './review-container';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { useSelector } from 'react-redux';

export const Reviews = () => {
    const { restaurantId } = useOutletContext();
    const { reviews } = useSelector((state) => selectRestaurantById(state, restaurantId));

    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {
                    reviews.map((id) =>
                        <li key={id}>
                            <ReviewContainer id={id} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}