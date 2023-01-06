import BottomNavigation from "../../ui/bottom-navigation";
import Header from "./header";
import SearchBar from "./search-bar";
import FoodCategory from "./food-category";
import './styles-main.scss'
import Food from "./food";

const Index = () => {
    return (
        <>
            <section className="bg_mirage h-full">
                <section className="px-12 md:pb-20 bg_dark relative z-10 rounded-b-main shadow-md">
                    <Header/>
                    <SearchBar/>
                    <FoodCategory/>
                    <Food/>
                </section>
                <BottomNavigation/>
            </section>
        </>
    )
}
export default Index