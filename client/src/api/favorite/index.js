import axiosInstance from "../baseUrl";
import {addFoodFavorite, deleteFoodFavorite, errorApi, getFoodFavorites, startApi} from "../../states/actions/favorite";

export const addFavorite = async (data, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/favorites/add', data)
        dispatch(addFoodFavorite(res.data.message))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const getFavorites = async (dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/favorites/')
        dispatch(getFoodFavorites(res.data.data))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const deleteFavorite = async (favoriteId, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.delete('/favorites/delete/' + favoriteId)
        dispatch(deleteFoodFavorite(favoriteId, res.data.message))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}