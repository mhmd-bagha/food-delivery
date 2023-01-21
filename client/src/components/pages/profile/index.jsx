import Header from "../login/header";
import {IoClose} from "react-icons/io5";
import {AiOutlinePlus} from "react-icons/ai";

const Profile = () => {
    return (
        <>
            {/* image header */}
            <div className="bg_mirage h-1/3 flex justify-center">
                {/* text header and close page */}
                <div className="flex justify-between items-center pt-20 absolute z-10 w-full px-6">
                    {/* empty space */}
                    <div className="invisible"></div>
                    {/* text header */}
                    <p className="text-gray-200 text-lg font-medium text-center ml-10">My Profile</p>
                    {/* button close page */}
                    <button className="bg_dark rounded-2xl p-2.5"><IoClose size={20} className="text-gray-200"/>
                    </button>
                </div>
                {/* header */}
                <Header/>
            </div>
            {/* content */}
            <div className="bg_dark px-8 py-16 rounded-t-main fixed bottom-0 w-full h-3/4 z-10">
                {/* profile image button add image person name */}
                <div className="relative bottom-28 pt-2.5">
                    <div className="flex justify-center items-baseline">
                        {/* profile img */}
                        <img src={require('../../../assets/images/person.jpg')} alt="image profile"
                             className="w-20 h-20 rounded-full"/>
                        {/* button add image to profile */}
                        <button
                            className="p-0.5 rounded-full bg-white relative right-6 bottom-1 border border-gray-800 outline-0">
                            <AiOutlinePlus size={17} className="text-black"/></button>
                    </div>
                    {/* person name */}
                    <p className="text-lg text-gray-200 font-bold text-center mt-2">Ebrahimi Bagha</p>
                </div>
            </div>
            {/* bg class */}
            <div className="bg_content_glass"></div>
        </>
    )
}
export default Profile