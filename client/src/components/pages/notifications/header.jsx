import Menu from "../../tools/menu";
import ImageProfile from "../../tools/image-profile";

const Header = () => {
    return (
        <>
            {/* header notifications page */}
            <div className="flex justify-between px-12 pt-8">
                {/* menu */}
                <Menu/>
                {/* text current page */}
                <p className="text-gray-200 font-medium text-lg">Notifications</p>
                {/* image profile */}
                <ImageProfile/>
            </div>
        </>
    )
}
export default Header