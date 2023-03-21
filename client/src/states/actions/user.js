import {AUTH_LOGIN, AUTH_SIGNUP, ERROR_API, LOGOUT, REFRESH_TOKEN, START_API} from "../actions-type/user";

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

export const logout = () => ({
    type: LOGOUT
})

export const errorApi = () => ({
    type: ERROR_API
})