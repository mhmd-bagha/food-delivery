import {IoBagHandleOutline} from "react-icons/io5";
import {Link} from "react-router-dom";

const Food = () => {
    return (
        <>
            <div className="mt-8 pb-9">
                <div className="grid grid-flow-col overflow-x-auto gap-7">
                    {/* food */}
                    <div className="min-w-max rounded-3xl bg_mirage px-2 py-5">
                        {/* image */}
                        <img src={require('../../../assets/images/food/sushi.png')} alt="image food"
                             className="px-3.5 py-2 w-52 h-auto rounded-3xl"/>
                        {/* information food */}
                        <div className="px-3 mt-1.5">
                            {/* name food */}
                            <p className="text-white text-lg">Sake Roll</p>
                            {/* des food */}
                            <p className="color-auro_metal_saurus text-sm mt-0.5">Kinoa, kani, avacoda</p>
                            {/* price and add to cart */}
                            <div className="flex justify-between items-center mt-6">
                                {/* price */}
                                <p className="color-burlywood font-bold">$14,50</p>
                                {/* add to cart */}
                                <Link to="/food/45">
                                    <button type="button" className="bg_red_coral rounded-full p-3"><IoBagHandleOutline
                                        size={20} className="text-white"/></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* food */}
                    <div className="min-w-max rounded-3xl bg_mirage px-2 py-5">
                        {/* image */}
                        <img src={require('../../../assets/images/food/sushi.png')} alt="image food"
                             className="px-3.5 py-2 w-52 h-auto rounded-3xl"/>
                        {/* information food */}
                        <div className="px-3 mt-1.5">
                            {/* name food */}
                            <p className="text-white text-lg">Sake Roll</p>
                            {/* des food */}
                            <p className="color-auro_metal_saurus text-sm mt-0.5">Kinoa, kani, avacoda</p>
                            {/* price and add to cart */}
                            <div className="flex justify-between items-center mt-6">
                                {/* price */}
                                <p className="color-burlywood font-bold">$14,50</p>
                                {/* add to cart */}
                                <Link to="/food/45">
                                    <button type="button" className="bg_red_coral rounded-full p-3"><IoBagHandleOutline
                                        size={20} className="text-white"/></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* food */}
                    <div className="min-w-max rounded-3xl bg_mirage px-2 py-5">
                        {/* image */}
                        <img src={require('../../../assets/images/food/sushi.png')} alt="image food"
                             className="px-3.5 py-2 w-52 h-auto rounded-3xl"/>
                        {/* information food */}
                        <div className="px-3 mt-1.5">
                            {/* name food */}
                            <p className="text-white text-lg">Sake Roll</p>
                            {/* des food */}
                            <p className="color-auro_metal_saurus text-sm mt-0.5">Kinoa, kani, avacoda</p>
                            {/* price and add to cart */}
                            <div className="flex justify-between items-center mt-6">
                                {/* price */}
                                <p className="color-burlywood font-bold">$14,50</p>
                                {/* add to cart */}
                                <Link to="/food/45">
                                    <button type="button" className="bg_red_coral rounded-full p-3"><IoBagHandleOutline
                                        size={20} className="text-white"/></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Food