import {ADD_FAVORITE, DELETE_FAVORITE, ERROR_API, SET_FAVORITES, START_API} from "../actions-type/favorite";

const initialState = {
    favorite: [],
    loading: false,
    message: ''
}
const Cart = (state = initialState, action) => {
    switch (action.type) {
        case START_API:
            return {...state, loading: true}
        case SET_FAVORITES:
            return {...state, loading: false, favorite: action.payload}
        case ADD_FAVORITE:
            return {...state, loading: false, message: action.message}
        case DELETE_FAVORITE:
            return {...state, loading: false, favorite: state.favorite.filter(({favorite_id}) => favorite_id !== action.payload)}
        case ERROR_API:
            return {...state, loading: false, message: action.message}
        default:
            return state
    }
}
export default Cart