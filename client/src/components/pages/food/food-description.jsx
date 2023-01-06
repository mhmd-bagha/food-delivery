import {FcAlarmClock} from "react-icons/fc";
import {GiKitchenScale} from "react-icons/gi";

const FoodDescription = () => {
    return (
        <>
            {/* food description */}
            <section className="bg_mirage h-1/2 lg:h-1/3 z-10">
                <div className="bg_dark px-12 pt-12 rounded-b-main shadow-md">
                    {/* icons data */}
                    <div className="flex justify-between items-center">
                        {/* fire */}
                        <div>
                            <img src={require('../../../assets/images/icons/fire.png')} alt="fire" className="w-4 h-auto"/>
                            <p className="text-white text-sm mt-1">130 cal</p>
                        </div>
                        {/* clock */}
                        <div>
                            <FcAlarmClock size={23}/>
                            <p className="text-white text-sm mt-1">15-20 min</p>
                        </div>
                        {/* vote */}
                        <div>
                            <img src={require('../../../assets/images/icons/star-struck.png')} alt="fire"
                                 className="w-7 h-auto"/>
                            <p className="text-white text-sm mt-1">4.9 vote</p>
                        </div>
                        {/* scale */}
                        <div>
                            <GiKitchenScale size={23} className="text-purple-500"/>
                            <p className="text-white text-sm mt-1">350g</p>
                        </div>
                    </div>
                    {/* description */}
                    <div className="py-7">
                        <p className="text-xl text-white font-medium">Description</p>
                        <p className="mt-2 color-auro_metal_saurus">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ab ad, adipisci aliquam corporis inventore ipsa, ipsum laudantium nisi pariatur
                            perferendis quidem.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FoodDescription