import axios from "axios";
import {GetToken} from "../components/tools/auth-user";

const axiosInstance = axios.create({
    baseURL: 'https://sample-food.bebest20.ir/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${GetToken()}`,
        'Access-Control-Allow-Origin': '*'
    },
    referrerPolicy: 'no-referrer'
})

export default axiosInstance