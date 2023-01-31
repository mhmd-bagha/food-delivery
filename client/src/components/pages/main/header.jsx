import Menu from "../../ui/menu/menu";

const Header = () => {
    return (
        <>
                {/* menu */}
                <Menu customClass={null}/>
            <p className="text-white mt-10 text-3xl grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 leading-tight">Fast
                and Delicious Food</p>
        </>
    )
}
export default Header