import {IoBagHandleOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {useEffect} from "react";
import getFoods from "../../../api/food";

const Food = ({getFoods, foods}) => {

    useEffect(() => {
        getFoods()
    }, [])

    return (
        <>
            <div className="mt-5 pb-9">
                <div className="grid grid-flow-col overflow-x-auto gap-7">
                    {/* food */}
                    {foods.foods && foods.foods.map((food, id) => (
                        <div className="min-w-max rounded-3xl bg_mirage px-2 py-5" key={id}>
                            {/* image */}
                            <img src={food.food_image} alt={food.food_name}
                                 className="px-3.5 py-2 w-52 h-36 rounded-3xl mx-auto"/>
                            {/* information food */}
                            <div className="px-3 mt-1.5">
                                {/* name food */}
                                <p className="text-white text-lg">{food.food_name}</p>
                                {/* des food */}
                                <p className="color-auro_metal_saurus text-sm mt-0.5">{food.food_materials}</p>
                                {/* price and add to cart */}
                                <div className="flex justify-between items-center mt-6">
                                    {/* price */}
                                    <p className="color-burlywood font-bold">${food.food_price}</p>
                                    {/* add to cart */}
                                    <Link to={'/food/' + food.id}>
                                        <button type="button" className="bg_red_coral rounded-full p-3">
                                            <IoBagHandleOutline
                                                size={20} className="text-white"/></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const mapToStateProps = (state) => {
    return {
        foods: state.foods
    }
}
const mapToDispatchProps = (dispatch) => {
    return {
        getFoods: () => getFoods(dispatch)
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Food)