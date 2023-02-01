import {Link} from "react-router-dom";
import {FiHeart} from "react-icons/fi";

const FavoritesView = () => {
    return (
        <>
            {/* scroll history */}
            <div className="bg_mirage h-full">
                <div
                    className="bg_dark h-5/6 rounded-b-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 my-10 px-12 py-6 overflow-y-auto">
                    {/* food */}
                    <div className="max-h-80 lg:w-9/12 rounded-3xl bg_mirage px-2 py-3">
                        {/* image */}
                        <Link to='/food/45'>
                            <img src={require('../../../assets/images/food/sushi.png')} alt="sushi"
                                 className="px-3.5 py-2 mx-auto w-52 h-auto rounded-3xl"/>
                        </Link>
                        {/* information food */}
                        <div className="px-3 mt-1.5">
                            {/* name food */}
                            <Link to='/food/45' className="text-white text-lg">Sake Roll</Link>
                            {/* des food */}
                            <p className="color-auro_metal_saurus text-sm mt-0.5">Kinoa, kani, avacoda</p>
                            {/* price and add to cart */}
                            <div className="flex justify-between items-center mt-6">
                                {/* price */}
                                <p className="color-burlywood font-bold">$14,50</p>
                                {/* add to cart */}
                                <button type="button" className="bg_red_coral rounded-full p-3">
                                    <FiHeart
                                        size={20} className="text-white"/></button>
                            </div>
                        </div>
                    </div>
                    {/* food */}
                    <div className="max-h-80 lg:w-9/12 rounded-3xl bg_mirage px-2 py-3">
                        {/* image */}
                        <Link to='/food/45'>
                            <img src={require('../../../assets/images/food/sushi.png')} alt="sushi"
                                 className="px-3.5 py-2 mx-auto w-52 h-auto rounded-3xl"/>
                        </Link>
                        {/* information food */}
                        <div className="px-3 mt-1.5">
                            {/* name food */}
                            <Link to='/food/45' className="text-white text-lg">Sake Roll</Link>
                            {/* des food */}
                            <p className="color-auro_metal_saurus text-sm mt-0.5">Kinoa, kani, avacoda</p>
                            {/* price and add to cart */}
                            <div className="flex justify-between items-center mt-6">
                                {/* price */}
                                <p className="color-burlywood font-bold">$14,50</p>
                                {/* add to cart */}
                                <button type="button" className="bg_red_coral rounded-full p-3">
                                    <FiHeart
                                        size={20} className="text-white"/></button>
                            </div>
                        </div>
                    </div>
                    {/* food */}
                    <div className="max-h-80 lg:w-9/12 rounded-3xl bg_mirage px-2 py-3">
                        {/* image */}
                        <Link to='/food/45'>
                            <img src={require('../../../assets/images/food/sushi.png')} alt="sushi"
                                 className="px-3.5 py-2 mx-auto w-52 h-auto rounded-3xl"/>
                        </Link>
                        {/* information food */}
                        <div className="px-3 mt-1.5">
                            {/* name food */}
                            <Link to='/food/45' className="text-white text-lg">Sake Roll</Link>
                            {/* des food */}
                            <p className="color-auro_metal_saurus text-sm mt-0.5">Kinoa, kani, avacoda</p>
                            {/* price and add to cart */}
                            <div className="flex justify-between items-center mt-6">
                                {/* price */}
                                <p className="color-burlywood font-bold">$14,50</p>
                                {/* add to cart */}
                                <button type="button" className="bg_red_coral rounded-full p-3">
                                    <FiHeart
                                        size={20} className="text-white"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FavoritesView