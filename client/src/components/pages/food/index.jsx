import Header from "./header";
import FoodData from "./food-data";
import FoodDescription from "./food-description";
import Footer from "./footer";
import {useEffect} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {addFood} from "../../../api/cart";
import {decrementCountFood, GetFood, incrementCountFood} from "../../../states/actions/food";
import {addFavorite} from "../../../api/favorite";

const Food = ({food, getFood, addToCart, incrementFoodCount, decrementFoodCount, addFavorite, favorite}) => {
    const {id: FoodId} = useParams(); // get param food id

    useEffect(() => {
        getFood(FoodId)
    }, [FoodId, getFood])

    return (<>
        <section className="bg_dark">
            <div className="bg_mirage px-12 pt-8 rounded-b-main">
                {/* header */}
                <Header addFavorite={addFavorite} foodId={FoodId} userId={5} favorite={favorite}/>
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
        food: state.foods,
        favorite: state.favorite
    }
}
const mapToDispatchProps = (dispatch) => {
    return {
        getFood: (FoodId) => dispatch(GetFood(FoodId)),
        incrementFoodCount: () => dispatch(incrementCountFood()),
        decrementFoodCount: () => dispatch(decrementCountFood()),
        addToCart: (data) => addFood(data, dispatch),
        addFavorite: (data) => addFavorite(data, dispatch)
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Food)