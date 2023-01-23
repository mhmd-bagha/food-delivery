import {connect} from "react-redux";
import {ShowHideMenu} from "../../../states/actions/menu";

const Menu = ({menu, setStatusMenu}) => {
    let classShowMenu = menu.menu ? 'block' : 'hidden'
    return (
        <>
            <div className={`${classShowMenu} bg_dark fixed top-0 bottom-0 left-0 right-0`}>
                {/* content menu */}
            </div>
        </>
    )
}

// states
const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}
// dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        setStatusMenu: (data) => dispatch(ShowHideMenu(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)