import {ADD_FAVORITE, DELETE_FAVORITE, ERROR_API, SET_FAVORITES, START_API} from "../actions-type/favorite";

export const startApi = () => ({
    type: START_API
})

export const getFoodFavorites = (data) => ({
    type: SET_FAVORITES,
    payload: data
})

export const addFoodFavorite = (message) => ({
    type: ADD_FAVORITE,
    message
})

export const deleteFoodFavorite = (favoriteId, message) => ({
    type: DELETE_FAVORITE,
    payload: favoriteId,
    message
})

export const errorApi = (message) => ({
    type: ERROR_API,
    message
})