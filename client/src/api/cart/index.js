import axiosInstance from "../baseUrl";
import {addFoodCart, deleteFoodCart, errorApi, fetchDataCart, startApi} from "../../states/actions/cart";

export const addFood = async (data, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/cart/add', data)
        dispatch(addFoodCart(res.data.message))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const getCart = async (dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/cart/get')
        dispatch(fetchDataCart(res.data.data, res.data.totalPrice, res.data.cart_id))
    } catch (err) {
        dispatch(errorApi(err))
    }
}

export const deleteFood = async (cartId, foodId, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.delete(`/cart/delete/cart-id/${cartId}/food-id/${foodId}`)
        dispatch(deleteFoodCart(foodId, res.data.message))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}