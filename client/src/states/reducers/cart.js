import {DELETE_FOOD, ERROR_API, SET_DATA_CART, START_API} from "../actions-type/cart";

const initialState = {
    cart: [],
    total_price: 0,
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
            let getFood = state.cart.find(({cart_id}) => cart_id === action.payload) // get food by cart id
            let total_price = state.total_price;
            total_price -= getFood.food_price * getFood.food_count;
            return {
                ...state,
                message: action.message,
                cart: state.cart.filter(({cart_id}) => cart_id !== action.payload),
                total_price: total_price
            }
        case ERROR_API:
            return {...state, message: action.message}
        default:
            return state
    }
}
export default Cart