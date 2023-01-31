import {POSITION_MAP, STATUS_UP_DOWN_ADDRESS_CARD} from "../actions-type/delivery-information";
// default data
const initialState = {
    up_down_address_card: false,
    position_map: [51.505, -0.09],
}

const DeliveryInformation = (state = initialState, action) => {
    // run action for send data
    switch (action.type) {
        case STATUS_UP_DOWN_ADDRESS_CARD:
            return {...state, up_down_address_card: action.data}
        case POSITION_MAP:
            return {...state, position_map: action.data}
        default:
            return state
    }
}
export default DeliveryInformation