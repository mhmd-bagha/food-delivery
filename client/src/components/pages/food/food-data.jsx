import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useState} from "react";

const FoodData = ({food}) => {
    const foodCountDefault = 1
    const [foodCount, setFoodCount] = useState(foodCountDefault)
    if (foodCount < foodCountDefault) setFoodCount(foodCountDefault)

    return (
        <>
            {/* food data */}
            <div className="mt-2 flex justify-center">
                {food && <div>
                    {/* food name */}
                    <h3 className="text-white text-2xl font-medium text-center">{food.food_name}</h3>
                    {/* food image */}
                    <img src={food.food_image} alt="sushi"
                         className="w-1/2 h-auto mx-auto"/>
                    {/* food count */}
                    <div className="flex justify-center">
                        <div
                            className="flex justify-between items-center bg_mirage text-white w-2/4 sm:w-1/4 md:w-1/4 lg:w-1/4 relative top-5 rounded-3xl">
                            {/* button minus food */}
                            <button className="p-2.5 bg_dark rounded-full border border-gray-700"
                                    onClick={() => setFoodCount(foodCount - 1)}>
                                <AiOutlineMinus size={18} className="text-white"/>
                            </button>
                            {/* food count */}
                            <p className="text-lg font-bold" id="food_count">{foodCount}</p>
                            {/* button plus food */}
                            <button className="p-2.5 bg_dark rounded-full border border-gray-700"
                                    onClick={() => setFoodCount(foodCount + 1)}>
                                <AiOutlinePlus size={18} className="text-white"/></button>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default FoodData