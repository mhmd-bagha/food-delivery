import {HiOutlineBars2} from "react-icons/hi2";
import MenuContent from '../ui/menu/menu';
const Menu = () => {
    return (
        <>
            {/* button open menu */}
            <button type="button" className="border border-gray-700 p-2.5 rounded-2xl"><HiOutlineBars2 size={20}
                                                                                                       className="text-white"/>
            </button>
            {/* menu */}
            <MenuContent Show={true}/>
        </>
    )
}
export default Menu