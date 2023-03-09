import axiosInstance from "../baseUrl";
import {errorApi, login, signup, startApi} from "../../states/actions/user";
import {errorToast} from "../../components/tools/toast-alert";
import {messages} from "../../components/tools/messages";

export const loginAuth = async (data, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/user/login', data)

        if (res.data.status === 200) dispatch(login(res.data))
        if (res.data.status === 401) errorToast(res.data.message)

        return Promise.resolve(res.data)
    } catch (err) {
        dispatch(errorApi(err))
        errorToast(messages.unknown_error)
        return Promise.reject(err)
    }
}

export const signupAuth = async (data, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/user/signup', data)

        if (res.data.status === 201) dispatch(signup(res.data))
        if (res.data.status === 500) errorToast(res.data.message)

        return Promise.resolve(res.data)
    } catch (err) {
        dispatch(errorApi(err))
        errorToast(messages.unknown_error)
        return Promise.reject(err)
    }
}

export const refreshTokenAuth = async () => {
    try {
        const res = await axiosInstance.post('/user/refresh-token')
        return res.data.access_token
    } catch (err) {
        return err.data
    }
}