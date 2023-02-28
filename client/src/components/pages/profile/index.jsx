import Header from "../login/header";
import {IoCloseSharp} from "react-icons/io5";
import {Link} from "react-router-dom";
import Information from "./information";
import {connect} from "react-redux";
import ProfileView from "./profile-view";

const Profile = ({user}) => {
    return (
        <>
            {/* image header */}
            <div className="bg_mirage h-1/3 flex justify-center">
                {/* text header and close page */}
                <div className="flex justify-between items-center pt-16 absolute z-10 w-full px-6">
                    {/* empty space */}
                    <div className="invisible"></div>
                    {/* text header */}
                    <p className="text-gray-200 text-lg font-medium text-center ml-10">My Profile</p>
                    {/* button close page */}
                    <Link to='/' className="bg_dark rounded-2xl p-2.5"><IoCloseSharp size={20}
                                                                                     className="text-gray-200"/></Link>
                </div>
                {/* header */}
                <Header/>
            </div>
            {/* content */}
            <div className="bg_dark px-8 py-16 rounded-t-main fixed bottom-0 w-full h-4/5 z-10">
                {/* profile */}
                <ProfileView user={user.user}/>
                {/* user information */}
                <Information user={user.user}/>
            </div>
            {/* bg class */}
            <div className="bg_content_glass"></div>
        </>
    )
}

const mapToStateProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapToStateProps, null)(Profile)