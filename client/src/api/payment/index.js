import axiosInstance from "../baseUrl";
import {addPay, errorApi, startApi} from "../../states/actions/payment";
import {errorToast, successToast} from "../../components/tools/toast-alert";
import {messages} from "../../components/tools/messages";

export const addPayment = async (data, dispatch) => {
    dispatch(startApi())
    try {
        const res = await axiosInstance.post('/payment/add', data);
        dispatch(addPay(res.data.message))

        return (res.data.status === 200) ? successToast(res.data.message) : errorToast(res.data.message)
    } catch (err) {
        dispatch(errorApi(err))
        errorToast(messages.unknown_error)
    }
}