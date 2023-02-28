import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import GenerateImageName from "../../tools/generate-image-name";

const ImageProfile = () => {
    const user = useSelector(state => state.user)
    const imageProfile = useImageProfile(user)
    return (
        <>
            {/* image profile user  */}
            <Link to='/profile'
                  className='w-12 h-11 rounded-2xl bg_gunmetal flex justify-center items-center color-auro_metal_saurus'>
                {imageProfile}
            </Link>
        </>
    )
}

const useImageProfile = (user) => {
    if (user.auth) {
        if (user.user.image !== null) {
            return <img src={user.user.image} alt={user.user.full_name} className="w-12 h-11 rounded-2xl"/>
        } else return GenerateImageName(user.user.full_name)
    } else return GenerateImageName('my profile') // default name
}

export default ImageProfile