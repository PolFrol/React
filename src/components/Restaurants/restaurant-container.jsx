import { useAddReviewMutation, useGetRestaurantsQuery } from "../../redux/services/api";
import { Restaurant } from './restaurant';

export const RestaurantContainer = ({ id }) => {
    const { data } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result.data?.find(({id: restaurantId}) => restaurantId === id)
        })
    });

    const { name } = data || {};

    const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation()

    const handleSubmit = (review) => {
        addReview({ restaurantId: id, review })
    }
    return (
        <Restaurant id={id} name={name} onSubmit={handleSubmit} isSubmitButtonDisabled={isAddReviewLoading} />
    )
}