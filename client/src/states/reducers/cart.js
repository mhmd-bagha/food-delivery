import {DELETE_FOOD, ERROR_API, SET_DATA_CART, START_API} from "../actions-type/cart";

const initialState = {
    cart: [],
    total_price: null,
    loading: false,
    message: ''
}
const Cart = (state = initialState, action) => {
    switch (action.type) {
        case START_API:
            return {...state, loading: true}
        case SET_DATA_CART:
            return {...state, cart: action.payload, total_price: action.total_price}
        case DELETE_FOOD:
            return {...state, message: action.message}
        case ERROR_API:
            return {...state, message: action.message}
        default:
            return state
    }
}
export default Cart