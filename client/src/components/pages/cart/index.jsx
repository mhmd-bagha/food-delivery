import Header from "./header";
import CartItems from './cart-items'
import TotalPriceNext from "../../ui/total-price-next";
import {deleteFood, getCart} from "../../../api/cart";
import {connect} from "react-redux";
import {useEffect} from "react";
import CartEmpty from "./cart-empty";

const Cart = ({cart, getCart, deleteFoodCart}) => {

    useEffect(() => {
        getCart()
    }, [getCart])

    return (
        <>
            {/* background full */}
            <section className="bg_mirage h-full">
                {/* start page */}
                <div className="bg_dark px-12 pt-8 h-5/6 rounded-b-main">
                    {/* header */}
                    <Header/>
                    {/* items cart */}
                    {cart.cart ? <CartItems foods={cart.cart} delete_food={deleteFoodCart}/> : <CartEmpty/>}
                </div>
                {/* total price and next top level */}
                {cart.cart ? <TotalPriceNext totalPrice={cart.total_price} linkText='Next' linkUrl='payment'/> : null}
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
        getCart: () => getCart(dispatch),
        deleteFoodCart: (cartId, foodId) => deleteFood(cartId, foodId, dispatch),
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Cart)