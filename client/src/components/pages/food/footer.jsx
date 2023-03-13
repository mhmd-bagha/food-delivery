import {useNavigate} from "react-router-dom";
import priceFormat from "../../tools/price-format";

const Footer = ({food, addFoodCart, food_id, food_count}) => {
    const navigate = useNavigate();
    // add to cart food
    const AddToCart = () => {
        let data = {user_id: 5, food_id, food_count};
        addFoodCart(data) ? navigate("/cart") : alert('not added food to cart')
    }
    return (
        <>
            {food && <div className="bg_dark">
                <div
                    className="flex justify-between items-center bg_mirage w-full px-5 sm:px-14 py-11 sm:py-3">
                    {/* price */}
                    <p className="text-xl text-gray-50 font-bold">${priceFormat(food.food_price)}</p>
                    {/* add to cart */}
                    <button type="button" className="bg_red_coral text-white font-bold px-14 py-4 rounded-2xl"
                            onClick={AddToCart}>Add to
                        cart
                    </button>
                </div>
            </div>}
        </>
    )
}
export default Footer