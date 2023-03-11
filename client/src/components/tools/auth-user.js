import {isExpired} from "react-jwt";
import {useDispatch} from "react-redux";
import {refreshTokenAuth} from "../../api/auth";
import {refreshToken} from "../../states/actions/user";

// export const SetToken = (token) => {
//     useJwt(token)
// }

export const ExpiredToken = (token) => {
    return isExpired(token)
}

export const GetToken = () => {
    // if (localStorage.getItem('persist:root')) {
    //     const user = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user) // get user from localStorage and json parse
    //     return user.token
    // } else return null
    try {
        const user = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user) // get user from localStorage and json parse
        return user.token
    } catch (err) {
        return null
    }
}

export const useUpdateToken = (user) => {
    const dispatch = useDispatch();

    if (user.auth) {
        const expiredToken = ExpiredToken(user.token)
        if (expiredToken) {
            // send request for refresh token then change token in store
            refreshTokenAuth().then((newToken) => {
                dispatch(refreshToken(newToken))
                window.location.reload()
            })
        }
    }
}

// export const useRefreshToken = (user, refreshToken) => {
//     if (user.auth) {
//         const expiredToken = ExpiredToken(user.token)
//         return (expiredToken) ? refreshToken : undefined
//     }
// }