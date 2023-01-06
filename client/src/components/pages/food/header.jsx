import {FiHeart} from "react-icons/fi";
import Back from "../../tools/back";

const Header = () => {
    return (
        <>
            {/* header */}
            <div className="flex justify-between">
                <Back/>
                <button type="button" className="bg_dark p-2.5 rounded-2xl border border-gray-700"><FiHeart size={17}
                                                                                                            className="text-white"/>
                </button>
            </div>
        </>
    )
}
export default Header