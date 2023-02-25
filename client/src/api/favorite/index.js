import axiosInstance from "../baseUrl";
import {addFoodFavorite, deleteFoodFavorite, errorApi, getFoodFavorites, startApi} from "../../states/actions/favorite";

export const addFavorite = async (data, dispatch) => {
    dispatch(startApi())
    const res = await axiosInstance.post('/favorites/add', data)
    try {
        dispatch(addFoodFavorite(res.data.message))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const getFavorites = async (userId, dispatch) => {
    dispatch(startApi())
    const res = await axiosInstance.post('/favorites/', userId)
    try {
        dispatch(getFoodFavorites(res.data.data))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const deleteFavorite = async (favoriteId, dispatch) => {
    dispatch(startApi())
    const res = await axiosInstance.delete('/favorites/delete/' + favoriteId)
    try {
        dispatch(deleteFoodFavorite(favoriteId, res.data.message))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}