import axiosInstance from "../baseUrl";
import {addPay, errorApi, startApi} from "../../states/actions/payment";

export const addPayment = async (data, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/payment/add', data);
        dispatch(addPay(res.data.message))
    } catch (err) {
        dispatch(errorApi(err.data))
    }
}