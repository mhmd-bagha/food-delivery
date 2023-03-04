import axiosInstance from "../baseUrl";
import {addFoodCart, deleteFoodCart, errorApi, fetchDataCart, startApi} from "../../states/actions/cart";

export const addFood = async (data, dispatch) => {
    dispatch(startApi())
    const res = await axiosInstance.post('/cart/add', data)
    try {
        dispatch(addFoodCart(res.data.message))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const getCart = async (dispatch) => {
    dispatch(startApi())
    const res = await axiosInstance.post('/cart/get')
    try {
        dispatch(fetchDataCart(res.data.data, res.data.totalPrice))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const deleteFood = async (cartId, foodId, dispatch) => {
    dispatch(startApi())
    const res = await axiosInstance.delete(`/cart/delete/cart-id/${cartId}/food-id/${foodId}`)
    try {
        dispatch(deleteFoodCart(foodId, res.data.message))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}