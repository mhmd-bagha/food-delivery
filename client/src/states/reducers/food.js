import {ERROR_API_FOOD, SET_DATA_FOOD, START_API_FOOD} from "../actions-type/food";

const initialState = {
    data: null,
    loading: false
}
const Food = (state = initialState, action) => {
    switch (action.type) {
        case START_API_FOOD:
            return {...state, loading: true}
        case SET_DATA_FOOD:
            return {loading: false, data: action.payload}
        case ERROR_API_FOOD:
            return {loading: false, data: action.payload}
        default:
            return state
    }
}
export default Food