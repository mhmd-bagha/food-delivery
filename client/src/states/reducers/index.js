import {combineReducers} from "redux";
import deliveryInformation from "./delivery-information";
import Menu from "./menu";
import FoodCategory from "./food-category";

export default combineReducers({
    deliveryInformation: deliveryInformation,
    menu: Menu,
    foodCategory: FoodCategory
})