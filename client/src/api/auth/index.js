import axiosInstance from "../baseUrl";
import {errorApi, login, signup, startApi} from "../../states/actions/user";

export const loginAuth = async (data, dispatch) => {
    dispatch(startApi())
    const res = await axiosInstance.post('/user/login', data)
    try {
        dispatch(login(res.data))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const signupAuth = async (data, dispatch) => {
    dispatch(startApi())
    const res = await axiosInstance.post('/user/signup', data)
    try {
        dispatch(signup(res.data))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}

export const auth = (data, dispatch) => {
    dispatch(startApi())
}