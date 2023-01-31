import {Link} from "react-router-dom";

const ImageProfile = () => {
    return (
        <>
            {/* image profile user  */}
            <Link to='/profile'>
                <img src={require('../../assets/images/person.jpg')} alt="profile image user"
                     className="w-12 h-11 rounded-2xl"/>
            </Link>
        </>
    )
}
export default ImageProfile