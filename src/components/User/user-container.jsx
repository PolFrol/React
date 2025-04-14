import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/slice"

export const UserContainer = ({ id }) => {
    const user = useSelector((state) => selectUserById(state, id));

    if (!user) {
        return null;
    }

    const { name } = user;

    return (
        <p>{name}</p>
    )
}