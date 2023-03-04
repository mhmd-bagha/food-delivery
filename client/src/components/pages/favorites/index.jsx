import Menu from "../../ui/menu/menu";
import BottomNavigation from "../../ui/bottom-navigation";
import FavoritesView from "./favorites";
import {connect} from "react-redux";
import {deleteFavorite, getFavorites} from "../../../api/favorite";
import {useEffect} from "react";

const Favorites = ({favorite, getFavorite, deleteFavorite}) => {

    useEffect(() => {
        getFavorite()
    }, [getFavorite])

    return (
        <>
            {/* background full */}
            <section className="bg_mirage h-full">
                <div className="bg_dark h-5/6 rounded-b-main">
                    {/* the menu and image and text current page */}
                    <Menu textCurrentPage="Favorite"/>
                    {/* notifications */}
                    <FavoritesView favorites={favorite.favorite} deleteFavorite={deleteFavorite}/>
                </div>
                <BottomNavigation/>
            </section>
        </>
    )
}

const mapToStateProps = (state) => {
    return {
        favorite: state.favorite
    }
}
const mapToDispatchProps = (dispatch) => {
    return {
        getFavorite: () => getFavorites(dispatch),
        deleteFavorite: (favorite_id) => deleteFavorite(favorite_id, dispatch)
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Favorites)