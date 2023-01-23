import {SHOW_HIDE_MENU} from "../actions-type/menu";

const initialState = {
    menu: false
}

const Menu = (state = initialState, action) => {
    // change status show/hide menu
    return (action.type === SHOW_HIDE_MENU) ? {menu: action.data} : state
}

export default Menu