import {FcAlarmClock} from "react-icons/fc";
import {GiKitchenScale} from "react-icons/gi";

const FoodDescription = ({food}) => {
    const food_information = food && JSON.parse(food.food_information) // set json parse in food information

    return (
        <>
            {food && <section className="bg_mirage h-1/2">
                <div className="bg_dark px-12 py-12 rounded-b-main shadow-md">
                    {/* icons data */}
                    <div className="flex justify-between items-center">
                        {/* fire */}
                        <div>
                            <img src={require('../../../assets/images/icons/fire.png')} alt="fire"
                                 className="w-4 h-auto"/>
                            <p className="text-white text-sm mt-1">{food_information.cal} cal</p>
                        </div>
                        {/* clock */}
                        <div>
                            <FcAlarmClock size={23}/>
                            <p className="text-white text-sm mt-1">{food_information.min} min</p>
                        </div>
                        {/* vote */}
                        <div>
                            <img src={require('../../../assets/images/icons/star-struck.png')} alt="fire"
                                 className="w-7 h-auto"/>
                            <p className="text-white text-sm mt-1">{food_information.vote} vote</p>
                        </div>
                        {/* scale */}
                        <div>
                            <GiKitchenScale size={23} className="text-purple-500"/>
                            <p className="text-white text-sm mt-1">{food_information.g} g</p>
                        </div>
                    </div>
                    {/* description */}
                    <div className="pt-10">
                        <p className="text-xl text-white font-medium">Description</p>
                        <p className="mt-2 color-auro_metal_saurus break-words">{food.food_description}</p>
                    </div>
                </div>
            </section>}
        </>
    )
}
export default FoodDescription