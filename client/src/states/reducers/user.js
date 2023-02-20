import {AUTH_LOGIN, AUTH_SIGNUP, ERROR_API, REFRESH_TOKEN, START_API} from "../actions-type/user";

const initialState = {
    user: null,
    token: null,
    auth: false,
    loading: false,
    message: '',
}

const User = (state = initialState, action) => {
    let data = null

    switch (action.type) {
        case START_API:
            return {...state, loading: true}
        case AUTH_SIGNUP:
        case AUTH_LOGIN:
            data = action.payload
            if (data.status === 201 || data.status === 200) {
                return {
                    ...state,
                    loading: false,
                    token: data.callback.access_token,
                    user: data.callback.user,
                    message: data.message,
                    auth: true
                }
            }
            break;
        case REFRESH_TOKEN:
            return {...state, loading: false, token: action.payload.data.callback.access_token}
        case ERROR_API:
            return {...state, loading: false, message: action.message}
        default:
            return state
    }
}

export default User