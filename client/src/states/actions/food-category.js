import {ERROR_API_FOOD_CATEGORY, SET_DATA_FOOD_CATEGORY, START_API_FOOD_CATEGORY} from "../actions-type/food-category";

export const startApiFoodCategory = () => ({
    type: START_API_FOOD_CATEGORY
})

export const setDataFoodCategory = (data) => ({
    type: SET_DATA_FOOD_CATEGORY,
    payload: data
})

export const errorApiFoodCategory = (data) => ({
    type: ERROR_API_FOOD_CATEGORY,
    payload: data
})