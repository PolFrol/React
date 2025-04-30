import { useParams } from "react-router";
import { Menu } from "../../components/Menu/menu";
import { useGetMenuQuery } from "../../redux/services/api";


export const MenuPage = () => {
    const { restaurantId } = useParams();
    const { data, isLoading, isError } = useGetMenuQuery(restaurantId);

    if (isLoading) {
        return 'loading...'
    }

    if (isError) {
        return 'error'
    }

    return (
        <Menu menu={data} />
    )
}