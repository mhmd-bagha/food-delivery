import {ERROR_API, START_API, ADD_PAYMENT} from "../actions-type/payment";

const initialState = {
    // type: 'credit-card',
    taxation: 0,
    loading: false,
    message: ''
}
const Payment = (state = initialState, action) => {
    switch (action.type) {
        case START_API:
            return {...state, loading: true}
        // case TYPE_PAYMENT:
        //     return {...state, type: action.payload}
        case ADD_PAYMENT:
            return {...state, message: action.payload}
        case ERROR_API:
            return {...state, loading: false}
        default:
            return state
    }
}
export default Payment