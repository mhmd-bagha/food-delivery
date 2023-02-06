import {ERROR_API_FOOD_CATEGORY, SET_DATA_FOOD_CATEGORY, START_API_FOOD_CATEGORY} from "../actions-type/food-category";

const initialState = {
    data: null,
    loading: false
}
const FoodCategory = (state = initialState, action) => {
    switch (action.type) {
        case START_API_FOOD_CATEGORY:
            return {...state, loading: true}
        case SET_DATA_FOOD_CATEGORY:
            return {loading: false, data: action.payload}
        case ERROR_API_FOOD_CATEGORY:
            return {loading: false, data: action.payload}
        default:
            return state
    }
}
export default FoodCategory