import axios from "axios";
import {GetToken} from "../components/tools/auth-user";

const axiosInstance = axios.create({
    baseURL: 'https://sample-food.bebest20.ir/api',
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

export default axiosInstance