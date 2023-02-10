import BottomNavigation from "../../ui/bottom-navigation";
import Header from "./header";
import SearchBar from "./search-bar";
import FoodCategory from "./food-category";
import './styles-main.scss'
import Food from "./food";
import {connect} from "react-redux";
import getFoodCategory from "../../../api/food-category";
import getFoods from "../../../api/food";
import {getFoodsCache, searchFood} from "../../../states/actions/food";

const Index = ({foodCategory, getCategoryFood, foods, getFoods, searchFood, getFoodsCache}) => {
    return (
        <>
            <section className="bg_mirage h-full">
                <section className="px-12 md:pb-20 bg_dark relative z-10 rounded-b-main shadow-md">
                    <Header/>
                    <SearchBar foods={foods} search={searchFood} getFoodsCache={getFoodsCache} foods_cache={foods.foods_cache}/>
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
        getFoods: () => getFoods(dispatch),
        searchFood: (food_data) => dispatch(searchFood(food_data)),
        getFoodsCache: (data) => dispatch(getFoodsCache(data))
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Index)