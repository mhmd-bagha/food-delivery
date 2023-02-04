import Header from "./header";
import FoodData from "./food-data";
import FoodDescription from "./food-description";
import Footer from "./footer";
import {useEffect} from "react";
import {connect} from "react-redux";
import {getFood} from "../../../api/food";
import {useParams} from "react-router-dom";

const Food = ({foods, getFood}) => {
    const {id} = useParams(); // get param food id

    useEffect(() => {
        getFood(id)
    }, [])

    return (<>
        <section className="bg_dark">
            <div className="bg_mirage px-12 pt-8 rounded-b-main">
                {/* header */}
                <Header/>
                {/* food data */}
                <FoodData food={foods.food}/>
            </div>
        </section>
        {/* food description */}
        <FoodDescription food={foods.food}/>
        {/* food price and add to cart */}
        <Footer food={foods.food}/>
    </>)
}

const mapToStateProps = (state) => {
    return {
        foods: state.foods
    }
}
const mapToDispatchProps = (dispatch) => {
    return {
        getFood: (FoodId) => getFood(FoodId, dispatch)
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Food)