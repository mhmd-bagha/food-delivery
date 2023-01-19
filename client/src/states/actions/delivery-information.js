import {STATUS_UP_DOWN_ADDRESS_CARD} from "../actions-type/delivery-information";

export const ChangeStatusAddressCard = (data) => ({
    type: STATUS_UP_DOWN_ADDRESS_CARD,
    payload: data
})

export const UpDownAddressCard = (dispatch, data) => {
    return dispatch(ChangeStatusAddressCard(data))
}