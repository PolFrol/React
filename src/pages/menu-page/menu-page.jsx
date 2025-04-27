import { useParams } from "react-router";
import { MenuContainer } from "../../components/Menu/menu-container";


export const MenuPage = () => { 
    const { restaurantId } = useParams();

    return (
        <MenuContainer restaurantId={restaurantId} />
    )
}