import {
    DECREMENT_FOOD_COUNT,
    ERROR_API_FOOD,
    INCREMENT_FOOD_COUNT,
    SEARCH_FOOD,
    SET_DATA_FOOD,
    GET_FOOD,
    START_API_FOOD
} from "../actions-type/food";

const initialState = {
    foods: [],
    foods_cache: [],
    food: null,
    loading: false,
    food_count: 1,
}
const Food = (state = initialState, action) => {
    switch (action.type) {
        case START_API_FOOD:
            return {...state, loading: true}
        case SET_DATA_FOOD:
            return {...state, loading: false, foods: action.payload, foods_cache: action.payload}
        case GET_FOOD:
            return {...state, loading: false, food: state.foods.find(({id}) => id == action.payload)}
        case INCREMENT_FOOD_COUNT:
            return {...state, food_count: state.food_count + 1}
        case DECREMENT_FOOD_COUNT:
            if (state.food_count === 1) return {...state, food_count: 1} // if the food count lower 1, this count equal 1
            return {...state, food_count: state.food_count - 1}
        case SEARCH_FOOD:
            let search_food = state.foods.filter(({
                                                      food_name,
                                                      food_materials,
                                                      category_id
                                                  }) => food_name.includes(action.payload) || food_materials.includes(action.payload) || category_id === action.payload)
            return {...state, foods: (search_food.length !== 0) && search_food}
        case ERROR_API_FOOD:
            return {...state, loading: false, foods: action.payload}
        default:
            return state
    }
}
export default Food