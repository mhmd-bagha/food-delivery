import BottomNavigation from "../../ui/bottom-navigation";
import Header from "./header";
import SearchBar from "./search-bar";
import FoodCategory from "./food-category";
import './styles-main.scss'
import Food from "./food";
import {connect} from "react-redux";
import getFoodCategory from "../../../api/food-category";
import getFoods from "../../../api/food";

const Index = ({foodCategory, getCategoryFood, foods, getFoods}) => {
    return (
        <>
            <section className="bg_mirage h-full">
                <section className="px-12 md:pb-20 bg_dark relative z-10 rounded-b-main shadow-md">
                    <Header/>
                    <SearchBar/>
                    <FoodCategory foodCategory={foodCategory} getCategoryFood={getCategoryFood}/>
                    <Food foods={foods} getFoods={getFoods}/>
                </section>
                <BottomNavigation/>
            </section>
        </>
    )
}

const mapToStateProps = (state) => {
    return {
        foodCategory: state.foodCategory,
        foods: state.foods
    }
}
const mapToDispatchProps = (dispatch) => {
    return {
        getCategoryFood: () => getFoodCategory(dispatch),
        getFoods: () => getFoods(dispatch)
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Index)