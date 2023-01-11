import Footer from "./footer";
import Back from "../../tools/back";
import "./styles.scss";

const Payment = () => {
    return (
        <>
            {/* background full */}
            <section className="bg_mirage h-full">
                {/* start page */}
                <div className="bg_dark px-12 pt-8 h-5/6 rounded-b-main">
                    {/* header */}
                    <div className="flex justify-between">
                        {/* button pack page */}
                        <Back/>
                        {/* text page */}
                        <p className="text-lg text-gray-200  font-medium">Payment</p>
                        <div className="invisible"></div>
                    </div>
                    {/* payment select list */}
                    <div className="pt-8">
                        {/* credit card */}
                        <div className="py-1">
                            <label htmlFor="credit-card" className="flex items-center form_check_label">
                                {/* input */}
                                <input type="radio" name="pay-select" id="credit-card" className="pay_select"/>
                                {/* image */}
                                <img src={require('../../../assets/images/icons/payment/credit-card.png')} alt=""
                                     className="w-9 h-9"/>
                                {/* name */}
                                <p className="pl-7 font-medium text_pay">Credit Card</p>
                                {/* dot radio */}
                                <div className="ml-auto dot"></div>
                            </label>
                        </div>
                    </div>
                </div>
                {/* total price and next top level */}
                <Footer/>
            </section>
        </>
    )
}
export default Payment