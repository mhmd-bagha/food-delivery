import {DELETE_FOOD, SET_DATA_CART, START_API} from "../actions-type/cart";

export const startApi = () => ({
    type: START_API
})

export const fetchDataCart = (data, total_price) => ({
    type: SET_DATA_CART,
    payload: data,
    total_price
})

export const addFoodCart = (message) => ({
    type: SET_DATA_CART,
    message
})

export const deleteFoodCart = (cartId, message) => ({
    type: DELETE_FOOD,
    payload: cartId,
    message
})

export const errorApi = (message) => ({
    type: START_API,
    message
})