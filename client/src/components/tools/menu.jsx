import {HiOutlineBars2} from "react-icons/hi2";
import {IoClose} from "react-icons/io5";

const Menu = () => {
    return (
        <>
            {/* button open menu */}
            <button type="button" className="border border-gray-700 p-2.5 rounded-2xl"><HiOutlineBars2 size={20}
                                                                                                       className="text-white"/>
            </button>
            <div className="menu bg_mirage h-full w-full fixed z-20 hidden">
                {/* header */}
                <div className="menu_header">
                    <button type="button" className="bg_dark border border-gray-700 p-2.5 rounded-2xl"><IoClose
                        size={20} className="text-white"/></button>
                </div>
                {/* content */}
                <div className="menu_content"></div>
                {/* footer */}
                <div className="menu_footer"></div>
            </div>
        </>
    )
}
export default Menu