import {isExpired} from "react-jwt";

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

// export const useRefreshToken = (user, refreshToken) => {
//     if (user.auth) {
//         const expiredToken = ExpiredToken(user.token)
//         return (expiredToken) ? refreshToken : undefined
//     }
// }