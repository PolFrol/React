import { useSelector } from "react-redux"
import { selectReviewById } from '../../redux/entities/reviews/slice'
import { UserContainer } from '../User/user-container'
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";


export const ReviewContainer = ({ id }) => {
    const review = useSelector((state) => selectReviewById(state, id));
    useRequest(getUsers);

    if (!review) {
        return null;
    }

    const { text, rating, userId } = review

    return (
        <>
            <p>{text}</p>
            <p>{rating}</p>
            <UserContainer id={userId} />
        </>
    )
}