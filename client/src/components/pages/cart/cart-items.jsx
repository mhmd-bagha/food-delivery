import {IoCloseSharp} from "react-icons/io5";
import {Link} from "react-router-dom";
import AlertConfirm from "../../tools/alert-confirm";

const CartItems = ({foods, delete_food}) => {

    const deleteFoodCart = (cartId) => {
        AlertConfirm(delete_food, cartId)
    }

    return (
        <>
            <section
                className="lg:grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-20 mt-10 overflow-y-auto h-5/6">
                {foods ? foods.map((food, index) => (
                    <div className="flex items-center py-4" key={index}>
                        {/* image */}
                        <Link to={'/food/' + food.id}
                              className="border border-gray-700 rounded-3xl p-2 mr-5 lg:mr-8 bg_mirage">
                            <img src={food.food_image} alt={food.food_name} className="h-20 w-40"/>
                        </Link>
                        {/* food number */}
                        <p className="color-auro_metal_saurus font-bold mr-5 lg:mr-8">{food.food_count}x</p>
                        {/* name and des and price and button delete food */}
                        <div className="flex justify-between items-baseline w-full">
                            {/* food data */}
                            <div>
                                {/* name */}
                                <Link to={'/food/' + food.id}>
                                    <p className="text-white text-xl font-medium my-2">{food.food_name}</p>
                                </Link>
                                {/* des */}
                                <p className="color-auro_metal_saurus text-sm my-2">{food.food_materials}</p>
                                {/* price */}
                                <p className="color-burlywood font-bold my-2">${food.food_price}</p>
                            </div>
                            {/* button delete food from cart */}
                            <button type="button" className="p-1.5 bg_gunmetal rounded-full"
                                    onClick={() => deleteFoodCart(food.cart_id)}><IoCloseSharp size={17}
                                                                                               className="color-auro_metal_saurus"/>
                            </button>
                        </div>
                    </div>
                )) : undefined}
            </section>
        </>
    )
}
export default CartItems