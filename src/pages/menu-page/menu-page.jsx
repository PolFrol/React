import { useParams } from "react-router";
import { Menu } from "../../components/Menu/menu";
import { IDLE, PENDING, REJECTED } from "../../redux/constants";
import { getMenu } from "../../redux/entities/dishes/get-menu";
import { useRequest } from "../../redux/hooks/use-request";
import { useSelector } from "react-redux";
import { selectDishIds } from "../../redux/entities/dishes/slice";


export const MenuPage = () => { 
    const { restaurantId } = useParams();
    const requestStatus = useRequest(getMenu, restaurantId);
    const menu = useSelector(selectDishIds);

    if (requestStatus === IDLE || requestStatus === PENDING) {
        return 'loading...'
    }

    if (requestStatus === REJECTED) {
        return 'error'
    }

    return (
        <Menu menu={menu} />
    )
}