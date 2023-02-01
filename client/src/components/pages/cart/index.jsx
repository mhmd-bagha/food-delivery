import Header from "./header";
import CartItems from './cart-items'
import TotalPriceNext from "../../ui/total-price-next";

const Cart = () => {
    return (<>
        {/* background full */}
        <section className="bg_mirage h-full">
            {/* start page */}
            <div className="bg_dark px-12 pt-8 h-5/6 rounded-b-main">
                {/* header */}
                <Header/>
                {/* items cart */}
                <CartItems/>
            </div>
            {/* total price and next top level */}
            <TotalPriceNext totalPrice='33,50' linkText='Next' linkUrl='payment'/>
        </section>
    </>)
}
export default Cart