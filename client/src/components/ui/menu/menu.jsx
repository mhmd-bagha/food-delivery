import {connect} from "react-redux";
import {ShowHideMenu} from "../../../states/actions/menu";
import {HiOutlineBars2} from "react-icons/hi2";
import {HiOutlineCreditCard} from "react-icons/hi";
import ImageProfile from "../../tools/image-profile";
import {IoBagHandleOutline, IoCloseSharp} from "react-icons/io5";
import {Link, NavLink} from "react-router-dom";
import {FiHeart} from "react-icons/fi";
import {VscHistory} from "react-icons/vsc";
import {AiOutlineFileText, AiOutlineMessage} from "react-icons/ai";
import {CiLogout} from "react-icons/ci";

const Menu = ({imageProfile = true, textCurrentPage = undefined, customClass = 'px-12', menu, setStatusMenu}) => {
    let classShowMenu = menu.menu ? 'right-0 left-0' : 'left-full' // the class show/hide menu
    return (
        <>
            {/* profile image and button open menu */}
            <div className={`flex justify-between sticky top-0 bg_dark z-10 pt-8 ${customClass}`}>
                {/* button open menu */}
                <button type="button" className="border border-gray-700 p-2.5 rounded-2xl "
                        onClick={() => setStatusMenu(true)}><HiOutlineBars2 size={20}
                                                                            className="text-white"/>
                </button>
                {/* text current page */}
                {textCurrentPage != undefined ?
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
                    <NavLink to="favorites" className="flex items-center py-4"><FiHeart size={21}
                                                                                        className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">Favorites</p></NavLink>
                    {/* payment methods */}
                    <NavLink to="payment-methods" className="flex items-center py-4"><HiOutlineCreditCard size={21}
                                                                                                          className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">Payment Methods</p></NavLink>
                    {/* my order */}
                    <NavLink to="my-order" className="flex items-center py-4"><IoBagHandleOutline size={21}
                                                                                                  className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">My Order</p></NavLink>
                    {/* history */}
                    <NavLink to="history" className="flex items-center py-4"><VscHistory size={21}
                                                                                         className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">History</p></NavLink>
                    {/* complaint */}
                    <NavLink to="complaint" className="flex items-center py-4"><AiOutlineMessage size={21}
                                                                                                 className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">Complaint</p></NavLink>
                    {/* privacy policy */}
                    <NavLink to="privacy-policy" className="flex items-center py-4"><AiOutlineFileText size={21}
                                                                                                       className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">Privacy Policy</p></NavLink>
                </div>
                {/* footer menu */}
                <div className="absolute bottom-16">
                    {/* user logout */}
                    <Link to="logout" className="flex items-center py-4"><CiLogout size={21}
                                                                                   className="color-auro_metal_saurus"/>
                        <p className="text-gray-200 text-sm font-medium ml-4">Log-out</p></Link>
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
        setStatusMenu: (data) => dispatch(ShowHideMenu(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)