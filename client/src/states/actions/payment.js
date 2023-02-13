import {ADD_PAYMENT, ERROR_API, START_API, TYPE_PAYMENT} from "../actions-type/payment";

export const startApi = () => ({
    type: START_API
})

export const setTypePay = (type_pay) => ({
    type: TYPE_PAYMENT,
    payload: type_pay
})

export const addPay = (data) => ({
    type: ADD_PAYMENT,
    payload: data
})

export const errorApi = (message) => ({
    type: ERROR_API,
    message
})