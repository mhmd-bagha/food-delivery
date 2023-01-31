import {POSITION_MAP, STATUS_UP_DOWN_ADDRESS_CARD} from "../actions-type/delivery-information";

// change status address card (up/down)
export const ChangeStatusAddressCard = (data) => ({
    type: STATUS_UP_DOWN_ADDRESS_CARD, data: data
})
// set position map
export const ChangePositionMap = (data) => ({
    type: POSITION_MAP, data: data
})

export const UpDownAddressCard = (dispatch, data) => {
    return dispatch(ChangeStatusAddressCard(data))
}

export const PositionMap = (dispatch, data) => {
    return dispatch(ChangePositionMap(data))
}