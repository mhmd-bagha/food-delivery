import {HiOutlineBars2} from "react-icons/hi2";

const Menu = () => {
    return (
        <>
            {/* button open menu */}
            <button type="button" className="border border-gray-700 p-2.5 rounded-2xl"><HiOutlineBars2 size={20}
                                                                                                       className="text-white"/>
            </button>
        </>
    )
}
export default Menu