import {connect} from "react-redux";
import {ShowHideMenu} from "../../../states/actions/menu";
import {HiOutlineBars2} from "react-icons/hi2";
import ImageProfile from "./image-profile";
import {IoBagHandleOutline, IoCloseSharp} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {FiHeart} from "react-icons/fi";
import {VscHistory} from "react-icons/vsc";
import {AiOutlineFileText, AiOutlineMessage} from "react-icons/ai";
import {CiLogout} from "react-icons/ci";
import {logout} from "../../../states/actions/user";
import {successToast} from "../../tools/toast-alert";

const Menu = ({
                  imageProfile = true,
                  textCurrentPage = undefined,
                  customClass = 'px-12',
                  menu,
                  setStatusMenu,
                  logout
              }) => {
    let classShowMenu = menu.menu ? 'right-0 left-0' : 'left-full' // the class show/hide menu

    const btnLogout = () => {
        logout()
        setStatusMenu(false)
        successToast('You have successfully logged out')
    }

    return (
        <>
            {/* profile image and button open menu */}
            <div className={`flex justify-between items-center sticky top-0 bg_dark z-10 pt-8 ${customClass}`}>
                {/* button open menu */}
                <button type="button" className="border border-gray-700 p-2.5 rounded-2xl "
                        onClick={() => setStatusMenu(true)}><HiOutlineBars2 size={20}
                                                                            className="text-white"/>
                </button>
                {/* text current page */}
                {textCurrentPage !== undefined ?
                    <p className="text-gray-200 font-medium text-lg">{textCurrentPage}</p> : null}
                {/* image person */}
                {imageProfile ? <ImageProfile/> : null}
            </div>
            {/* menu */}
            <div className={`${classShowMenu} bg_dark fixed top-0 bottom-0 z-10 py-8 px-10`}>
                {/* header menu */}
                <div className="flex justify-end">
                    {/* button close menu */}
                    <button type="button" className="border border-gray-700 p-2.5 rounded-2xl"
                            onClick={() => setStatusMenu(false)}><IoCloseSharp size={20} className="text-gray-200"/>
                    </button>
                </div>
                {/* content menu */}
                <div className="mt-20">
                    {/* favorite */}
                    <NavLink to="/favorites" className="flex items-center py-4"
                             onClick={() => setStatusMenu(false)}><FiHeart size={21}
                                                                           className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">Favorites</p></NavLink>
                    {/* my order */}
                    <NavLink to="/cart" className="flex items-center py-4"
                             onClick={() => setStatusMenu(false)}><IoBagHandleOutline size={21}
                                                                                      className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">My Order</p></NavLink>
                    {/* history */}
                    <NavLink to="/history" className="flex items-center py-4"
                             onClick={() => setStatusMenu(false)}><VscHistory size={21}
                                                                              className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">History</p></NavLink>
                    {/* complaint */}
                    <NavLink to="/complaint" className="flex items-center py-4"
                             onClick={() => setStatusMenu(false)}><AiOutlineMessage size={21}
                                                                                    className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">Complaint</p></NavLink>
                    {/* privacy policy */}
                    <NavLink to="/privacy-policy" className="flex items-center py-4"
                             onClick={() => setStatusMenu(false)}><AiOutlineFileText size={21}
                                                                                     className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">Privacy Policy</p></NavLink>
                </div>
                {/* footer menu */}
                <div className="absolute bottom-16">
                    {/* user logout */}
                    <button className="flex items-center py-4" onClick={btnLogout}>
                        <CiLogout size={21} className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">Log-out</p>
                    </button>
                </div>
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
        setStatusMenu: (data) => dispatch(ShowHideMenu(data)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)