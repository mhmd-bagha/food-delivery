import Menu from "../../tools/menu";
import ImageProfile from "../../tools/image-profile";

const Header = () => {
    return (
        <>
            <div className="flex justify-between sticky top-0 bg_dark pt-8 z-10">
                {/* menu */}
                <Menu/>
                {/* image person */}
                <ImageProfile/>
            </div>
            <p className="text-white mt-10 text-3xl grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 leading-tight">Fast
                and Delicious Food</p>
        </>
    )
}
export default Header