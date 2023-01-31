import {combineReducers} from "redux";
import deliveryInformation from "./delivery-information";
import Menu from "./menu";

export default combineReducers({
    deliveryInformation: deliveryInformation,
    menu: Menu
})