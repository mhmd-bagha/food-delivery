import {IoCloseSharp} from "react-icons/io5";
import {Link} from "react-router-dom";

const CartItems = () => {
    return (
        <>
            <section className="pt-20 mt-10 overflow-y-auto h-5/6">
                {/* items cart */}
                <div className="flex items-center py-4">
                    {/* image */}
                    <Link to="/food/45" className="border border-gray-700 rounded-3xl py-4 mr-7 bg_mirage">
                        <img src={require('../../../assets/images/food/sushi.png')} alt="image food"
                             className="h-auto w-40"/>
                    </Link>
                    {/* food number */}
                    <p className="color-auro_metal_saurus font-bold mr-7">1x</p>
                    {/* name and des and price and button delete food */}
                    <div className="flex justify-between items-baseline w-full">
                        {/* food data */}
                        <div>
                            {/* name */}
                            <Link to="/food/45"><p className="text-white text-xl font-medium my-2">Sake Roll</p></Link>
                            {/* des */}
                            <p className="color-auro_metal_saurus text-sm my-2">Kinoa, kani, avacoda</p>
                            {/* price */}
                            <p className="color-burlywood font-bold my-2">$14,50</p>
                        </div>
                        {/* button delete food from cart */}
                        <button type="button" className="p-1.5 bg_gunmetal rounded-full"><IoCloseSharp size={17}
                                                                                                       className="color-auro_metal_saurus"/>
                        </button>
                    </div>
                </div>
                {/* items cart */}
                <div className="flex items-center py-4">
                    {/* image */}
                    <Link to="/food/45" className="border border-gray-700 rounded-3xl py-4 mr-7 bg_mirage">
                        <img src={require('../../../assets/images/food/sushi.png')} alt="image food"
                             className="h-auto w-40"/>
                    </Link>
                    {/* food number */}
                    <p className="color-auro_metal_saurus font-bold mr-7">1x</p>
                    {/* name and des and price and button delete food */}
                    <div className="flex justify-between items-baseline w-full">
                        {/* food data */}
                        <div>
                            {/* name */}
                            <Link to="/food/45"><p className="text-white text-xl font-medium my-2">Sake Roll</p></Link>
                            {/* des */}
                            <p className="color-auro_metal_saurus text-sm my-2">Kinoa, kani, avacoda</p>
                            {/* price */}
                            <p className="color-burlywood font-bold my-2">$14,50</p>
                        </div>
                        {/* button delete food from cart */}
                        <button type="button" className="p-1.5 bg_gunmetal rounded-full"><IoCloseSharp size={17}
                                                                                                       className="color-auro_metal_saurus"/>
                        </button>
                    </div>
                </div>
                {/* items cart */}
                <div className="flex items-center py-4">
                    {/* image */}
                    <Link to="/food/45" className="border border-gray-700 rounded-3xl py-4 mr-7 bg_mirage">
                        <img src={require('../../../assets/images/food/sushi.png')} alt="image food"
                             className="h-auto w-40"/>
                    </Link>
                    {/* food number */}
                    <p className="color-auro_metal_saurus font-bold mr-7">1x</p>
                    {/* name and des and price and button delete food */}
                    <div className="flex justify-between items-baseline w-full">
                        {/* food data */}
                        <div>
                            {/* name */}
                            <Link to="/food/45"><p className="text-white text-xl font-medium my-2">Sake Roll</p></Link>
                            {/* des */}
                            <p className="color-auro_metal_saurus text-sm my-2">Kinoa, kani, avacoda</p>
                            {/* price */}
                            <p className="color-burlywood font-bold my-2">$14,50</p>
                        </div>
                        {/* button delete food from cart */}
                        <button type="button" className="p-1.5 bg_gunmetal rounded-full"><IoCloseSharp size={17}
                                                                                                       className="color-auro_metal_saurus"/>
                        </button>
                    </div>
                </div>
                {/* items cart */}
                <div className="flex items-center py-4">
                    {/* image */}
                    <Link to="/food/45" className="border border-gray-700 rounded-3xl py-4 mr-7 bg_mirage">
                        <img src={require('../../../assets/images/food/sushi.png')} alt="image food"
                             className="h-auto w-40"/>
                    </Link>
                    {/* food number */}
                    <p className="color-auro_metal_saurus font-bold mr-7">1x</p>
                    {/* name and des and price and button delete food */}
                    <div className="flex justify-between items-baseline w-full">
                        {/* food data */}
                        <div>
                            {/* name */}
                            <Link to="/food/45"><p className="text-white text-xl font-medium my-2">Sake Roll</p></Link>
                            {/* des */}
                            <p className="color-auro_metal_saurus text-sm my-2">Kinoa, kani, avacoda</p>
                            {/* price */}
                            <p className="color-burlywood font-bold my-2">$14,50</p>
                        </div>
                        {/* button delete food from cart */}
                        <button type="button" className="p-1.5 bg_gunmetal rounded-full"><IoCloseSharp size={17}
                                                                                                       className="color-auro_metal_saurus"/>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CartItems