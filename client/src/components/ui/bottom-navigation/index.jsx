import './style.scss'
import {GrHomeRounded} from "react-icons/gr";
import {NavLink} from "react-router-dom";
import {IoBagHandleOutline, IoNotificationsOutline} from "react-icons/io5";
import {FiHeart} from "react-icons/fi";

const BottomNavigation = () => {
    return (
        <div className="flex justify-between bg_mirage w-full px-14 py-10 mb-1 fixed bottom-0 lg:bottom-6 lg:mb-3 bottom_navigate">
            <NavLink to="/" className="bottom_navigate_icon"><GrHomeRounded className="w-[25px] h-[25px] sm:w-[20px] sm:h-[20px]"/></NavLink>
            <NavLink to="/liked" className="bottom_navigate_icon"><FiHeart className="w-[25px] h-[25px] sm:w-[20px] sm:h-[20px]"/></NavLink>
            <NavLink to="/notifications" className="bottom_navigate_icon"><IoNotificationsOutline className="w-[25px] h-[25px] sm:w-[20px] sm:h-[20px]"/></NavLink>
            <NavLink to="/cart" className="bottom_navigate_icon"><IoBagHandleOutline className="w-[25px] h-[25px] sm:w-[20px] sm:h-[20px]"/></NavLink>
        </div>
    )
}
export default BottomNavigation