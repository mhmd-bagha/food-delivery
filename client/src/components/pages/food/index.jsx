import Header from "./header";
import FoodData from "./food-data";
import FoodDescription from "./food-description";
import Footer from "./footer";
import {useEffect} from "react";
import {connect} from "react-redux";
import {getFood} from "../../../api/food";
import {useParams} from "react-router-dom";
import {addFood} from "../../../api/cart";
import {decrementCountFood, incrementCountFood} from "../../../states/actions/food";

const Food = ({food, getFood, addToCart, incrementFoodCount, decrementFoodCount}) => {
    const {id: FoodId} = useParams(); // get param food id

    useEffect(() => {
        getFood(FoodId)
    }, [])

    return (<>
        <section className="bg_dark">
            <div className="bg_mirage px-12 pt-8 rounded-b-main">
                {/* header */}
                <Header/>
                {/* food data */}
                <FoodData food={food.food} minusFoodCount={decrementFoodCount}
                          plusFoodCount={incrementFoodCount} foodCount={food.food_count}/>
            </div>
        </section>
        {/* food description */}
        <FoodDescription food={food.food}/>
        {/* food price and add to cart */}
        <Footer food={food.food} addFoodCart={addToCart} food_id={FoodId} food_count={food.food_count}/>
    </>)
}

const mapToStateProps = (state) => {
    return {
        food: state.foods
    }
}
const mapToDispatchProps = (dispatch) => {
    return {
        getFood: (FoodId) => getFood(FoodId, dispatch),
        incrementFoodCount: () => dispatch(incrementCountFood()),
        decrementFoodCount: () => dispatch(decrementCountFood()),
        addToCart: (data) => addFood(data, dispatch)
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Food)