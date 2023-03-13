import "./styles.scss";
import "../../../styles/forms.scss";
import PaymentList from "./payment-list";
import Header from "./header";
import CouponTaxation from "./coupon-taxation";
import TotalPriceNext from "../../ui/total-price-next";
import {connect} from "react-redux";
// import {setTypePay} from "../../../states/actions/payment";
import {useCallback, useEffect, useRef, useState} from "react";
import {addPayment} from "../../../api/payment";

const Payment = ({cart, payment, addPay}) => {
    const coupon = useRef(null)
    const btnPay = useRef(null)
    const [typePay, setTypePay] = useState('credit-card')

    const totalPriceTaxation = parseInt(cart.total_price) + parseInt(payment.taxation) // addition total price with taxation

    const pay = useCallback(() => {
        btnPay.current.addEventListener('click', () => {
            return addPay({payment_type: typePay})
        })
    }, [addPay, typePay])

    useEffect(() => {
        pay()
    }, [pay])

    return (
        <>
            {/* background full */}
            <section className="bg_mirage h-full">
                {/* start page */}
                <div className="bg_dark px-12 pt-8 h-5/6 rounded-b-main">
                    {/* header */}
                    <Header/>
                    {/* payment select list */}
                    <PaymentList setTypePay={setTypePay}/>
                    {/* coupon code and taxation */}
                    <CouponTaxation coupon={coupon} taxation={payment.taxation}/>
                </div>
                {/* total price and next top level */}
                <TotalPriceNext totalPrice={totalPriceTaxation} linkText='Order Now' linkUrl='payment'
                                buttonRef={btnPay}/>
            </section>
        </>
    )
}

const mapToStateProps = (state) => {
    return {
        cart: state.cart,
        payment: state.payment
    }
}
const mapToDispatchProps = (dispatch) => {
    return {
        // setTypePay: (type_payment) => dispatch(setTypePay(type_payment)),
        addPay: (data) => addPayment(data, dispatch)
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Payment)