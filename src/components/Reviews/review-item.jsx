import { UserContainer } from '../User/user-container';

export const ReviewItem = ({ text, rating, userId }) => {
   
    return (
        <>
            <p>{text}</p>
            <p>{rating}</p>
            <UserContainer id={userId} />
        </>
    )
}