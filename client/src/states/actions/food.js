import {
    DECREMENT_FOOD_COUNT,
    ERROR_API_FOOD,
    INCREMENT_FOOD_COUNT, SEARCH_FOOD,
    SET_DATA_FOOD,
    SET_DATA_GET_FOOD,
    START_API_FOOD
} from "../actions-type/food";

export const startApiFood = () => ({
    type: START_API_FOOD
})

export const setDataFood = (data) => ({
    type: SET_DATA_FOOD,
    payload: data
})

export const setDataGetFood = (data) => ({
    type: SET_DATA_GET_FOOD,
    payload: data
})

export const errorApiFood = (data) => ({
    type: ERROR_API_FOOD,
    payload: data
})

export const incrementCountFood = () => ({
    type: INCREMENT_FOOD_COUNT
})

export const decrementCountFood = () => ({
    type: DECREMENT_FOOD_COUNT
})

export const searchFood = (food_data) => ({
    type: SEARCH_FOOD,
    payload: food_data
})

export const getFoodsCache = (data) => ({
    type: SET_DATA_FOOD,
    payload: data
})