import Back from "../../tools/back";

const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                {/* back */}
                <Back/>
                {/* text title page */}
                <p className="font-medium text-lg text-white">My Cart</p>
                {/* null element for space null */}
                <div className="invisible"></div>
            </div>
        </>
    )
}
export default Header