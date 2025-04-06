import { useSelector } from "react-redux";
import { selectUsersById } from "../../redux/entities/users/slice"

export const UserContainer = ({ id }) => {
    const user = useSelector((state) => selectUsersById(state, id));

    if (!user) {
        return null;
    }

    const { name } = user;

    return (
        <p>{name}</p>
    )
}