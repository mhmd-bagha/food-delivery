import {combineReducers} from "redux";
import deliveryInformation from "./delivery-information";
import Menu from "./menu";
import FoodCategory from "./food-category";
import Food from "./food";
import Cart from "./cart";
import Favorite from "./favorite";

export default combineReducers({
    deliveryInformation: deliveryInformation,
    menu: Menu,
    foodCategory: FoodCategory,
    foods: Food,
    cart: Cart,
    favorite: Favorite
})