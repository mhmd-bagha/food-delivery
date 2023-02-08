import Header from "./header";
import CartItems from './cart-items'
import TotalPriceNext from "../../ui/total-price-next";
import {deleteFood, getCart} from "../../../api/cart";
import {connect} from "react-redux";
import {useEffect} from "react";

const Cart = ({cart, getCart, deleteFoodCart, user_id}) => {

    useEffect(() => {
        getCart({user_id: 5})
    }, [])

    return (
        <>
            {/* background full */}
            <section className="bg_mirage h-full">
                {/* start page */}
                <div className="bg_dark px-12 pt-8 h-5/6 rounded-b-main">
                    {/* header */}
                    <Header/>
                    {/* items cart */}
                    <CartItems foods={cart.cart} delete_food={deleteFoodCart}/>
                </div>
                {/* total price and next top level */}
                <TotalPriceNext totalPrice={cart.total_price} linkText='Next' linkUrl='payment'/>
            </section>
        </>
    )
}

const mapToStateProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapToDispatchProps = (dispatch) => {
    return {
        getCart: (userId) => getCart(userId, dispatch),
        deleteFoodCart: (cartId) => deleteFood(cartId, dispatch),
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Cart)