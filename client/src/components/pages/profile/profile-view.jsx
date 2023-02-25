import {AiOutlinePlus} from "react-icons/ai";
import GenerateImageName from "../../tools/generate-image-name";

const ProfileView = ({user}) => {
    const imagePorfile = useImageProfile(user)

    return (
        <div className="relative -top-28 pt-2.5">
            <div className="flex justify-center items-baseline">
                {/* profile img */}
                {imagePorfile}
                {/* button add image to profile */}
                <label htmlFor="image_profile"
                       className="p-0.5 rounded-full bg-white relative right-6 bottom-0 border border-gray-800 outline-0 cursor-pointer">
                    <input type="file" name="image_profile" id="image_profile" hidden/>
                    <AiOutlinePlus size={17} className="text-black"/>
                </label>
            </div>
            {/* person name */}
            <p className="text-lg text-gray-200 font-bold text-center mt-2 mr-4">{user.full_name}</p>
        </div>
    )
}

const useImageProfile = (user) => {
    if (user.image !== null) {
        return <img src={user.image} alt={user.full_name} className="w-20 h-20 rounded-full"/>
    } else {
        return <div
            className="w-20 h-20 rounded-full text-lg color-auro_metal_saurus bg_gunmetal relative flex justify-center items-center">
            <p
                className="absolute">{GenerateImageName(user.full_name)}</p></div>
    }
}

export default ProfileView