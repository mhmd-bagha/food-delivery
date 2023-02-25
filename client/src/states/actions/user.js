import {AUTH_LOGIN, AUTH_SIGNUP, ERROR_API, REFRESH_TOKEN, START_API} from "../actions-type/user";

export const startApi = () => ({
    type: START_API
})

export const login = (data) => ({
    type: AUTH_LOGIN,
    payload: data
})

export const signup = (data) => ({
    type: AUTH_SIGNUP,
    payload: data
})

export const refreshToken = (token) => ({
    type: REFRESH_TOKEN,
    payload: token
})

export const errorApi = () => ({
    type: ERROR_API
})