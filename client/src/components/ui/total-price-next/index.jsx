import {Link} from "react-router-dom";
import priceFormat from "../../tools/price-format";

const TotalPriceNext = ({linkText, linkUrl, totalPrice, buttonRef}) => {
    return (
        <>
            {/* total price and next top level */}
            <div className="bg_mirage py-10 px-5 sm:px-12 flex justify-between items-center">
                {/* total price */}
                <div>
                    <p className="text-sm text-gray-400">Total Price</p>
                    <p className="text-2xl font-bold text-gray-100">${priceFormat(totalPrice)}</p>
                </div>
                {/* next to top level */}
                <Link to={`/` + linkUrl}
                      className="bg_red_coral text-white font-bold w-3/5 sm:w-1/3 xl:w-1/5 2xl:w-1/6 py-4 rounded-2xl text-center" ref={buttonRef}>{linkText}</Link>
            </div>
        </>
    )
}
export default TotalPriceNext