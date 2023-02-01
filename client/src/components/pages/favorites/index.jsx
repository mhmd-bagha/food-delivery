import Menu from "../../ui/menu/menu";
import BottomNavigation from "../../ui/bottom-navigation";
import FavoritesView from "./favorites";

const Favorites = () => {
    return (
        <>
            {/* background full */}
            <section className="bg_mirage h-full">
                <div className="bg_dark h-5/6 rounded-b-main">
                    {/* the menu and image and text current page */}
                    <Menu textCurrentPage="Favorite"/>
                    {/* notifications */}
                    <FavoritesView/>
                </div>
                <BottomNavigation/>
            </section>
        </>
    )
}
export default Favorites