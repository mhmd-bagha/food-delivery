import axios from "axios";
import {GetToken} from "../components/tools/auth-user";
import {refreshTokenAuth} from "./auth";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    referrerPolicy: 'no-referrer'
})


axiosInstance.interceptors.request.use(
    async config => {
        config.headers = {
            'Authorization': `Bearer ${GetToken()}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    });

// after response and refresh token then send request
axiosInstance.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const access_token = await refreshTokenAuth();
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
});

export default axiosInstance