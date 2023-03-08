import axiosInstance from "../baseUrl";
import {errorApi, login, refreshToken, signup, startApi} from "../../states/actions/user";

export const loginAuth = async (data, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/user/login', data)
        dispatch(login(res.data))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const signupAuth = async (data, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/user/signup', data)
        dispatch(signup(res.data))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const refreshTokenAuth = async (dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/user/refresh-token')
        dispatch(refreshToken(res.data))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}