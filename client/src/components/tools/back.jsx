import {useNavigate} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

const Back = () => {
    const navigate = useNavigate();
    const BackPage = () => {
        return navigate(-1)
    }
    return (<button type="button" className="bg_dark p-2.5 rounded-2xl border border-gray-700" onClick={BackPage}>
        <IoIosArrowBack size={17} className="text-white"/></button>)
}
export default Back