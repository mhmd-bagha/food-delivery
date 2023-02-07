import {
    DECREMENT_FOOD_COUNT, ERROR_API_FOOD, INCREMENT_FOOD_COUNT, SET_DATA_FOOD, SET_DATA_GET_FOOD, START_API_FOOD
} from "../actions-type/food";

const initialState = {
    foods: null,
    food: null,
    loading: false,
    food_count: 1,
}
const Food = (state = initialState, action) => {
    switch (action.type) {
        case START_API_FOOD:
            return {...state, loading: true}
        case SET_DATA_FOOD:
            return {...state, loading: false, foods: action.payload}
        case SET_DATA_GET_FOOD:
            return {...state, loading: false, food: action.payload}
        case INCREMENT_FOOD_COUNT:
            return {...state, food_count: state.food_count + 1}
        case DECREMENT_FOOD_COUNT:
            if (state.food_count === 1) return {...state, food_count: 1} // if the food count lower 1, this count equal 1
            return {...state, food_count: state.food_count - 1}
        case ERROR_API_FOOD:
            return {...state, loading: false, foods: action.payload}
        default:
            return state
    }
}
export default Food