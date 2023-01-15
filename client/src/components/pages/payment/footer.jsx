import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* total price and next top level */}
            <div className="bg_mirage py-10 px-12 flex justify-between items-center lg:pt-36 xl:pt-40">
                {/* total price */}
                <div>
                    <p className="text-sm text-gray-400">Total Price</p>
                    <p className="text-2xl font-bold text-gray-100">$33,50</p>
                </div>
                {/* next to top level */}
                <Link to="/delivery-information" className="bg_red_coral text-white font-bold px-14 py-4 rounded-2xl">Order Now</Link>
            </div>
        </>
    )
}
export default Footer