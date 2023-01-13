import {useEffect, useState} from "react";

const PaymentList = () => {
    const [element, setElement] = useState("label_credit-card") // get/set id element state
    useEffect(() => {
        var getRadios = document.querySelectorAll('label') // get all radios button
        // for all radios and delete class active
        getRadios.forEach((e) => {
            e.classList.remove('bg-white')
        })
        var getRadio = document.getElementById(element) // get id from element
        getRadio.classList.add('bg-white') // change bg to white
    })
    return (
        <>
            {/* payment select list */}
            <div className="pt-12">
                {/* credit card */}
                <div className="py-2">
                    <label htmlFor="credit-card" id="label_credit-card"
                           className="flex items-center form_check_label"
                           onClick={() => setElement('label_credit-card')}>
                        {/* input */}
                        <input type="radio" name="pay-select" id="credit-card" className="pay_select" defaultChecked/>
                        {/* image */}
                        <img src={require('../../../assets/images/icons/payment/credit-card.png')} alt=""
                             className="w-9 h-9"/>
                        {/* name */}
                        <p className="pl-7 font-medium text_pay">Credit Card</p>
                        {/* dot radio */}
                        <div className="ml-auto dot"></div>
                    </label>
                </div>
                {/* paypal */}
                <div className="py-2">
                    <label htmlFor="paypal" id="label_paypal"
                           className="flex items-center form_check_label"
                           onClick={() => setElement('label_paypal')}>
                        {/* input */}
                        <input type="radio" name="pay-select" id="paypal" className="pay_select"/>
                        {/* image */}
                        <img src={require('../../../assets/images/icons/payment/paypal.png')} alt=""
                             className="w-9 h-9"/>
                        {/* name */}
                        <p className="pl-7 font-medium text_pay">Paypal</p>
                        {/* dot radio */}
                        <div className="ml-auto dot"></div>
                    </label>
                </div>
                {/* google play */}
                <div className="py-2">
                    <label htmlFor="google-play" id="label_google-play"
                           className="flex items-center form_check_label"
                           onClick={() => setElement('label_google-play')}>
                        {/* input */}
                        <input type="radio" name="pay-select" id="google-play" className="pay_select"/>
                        {/* image */}
                        <img src={require('../../../assets/images/icons/payment/google.png')} alt=""
                             className="w-9 h-9"/>
                        {/* name */}
                        <p className="pl-7 font-medium text_pay">Google Play</p>
                        {/* dot radio */}
                        <div className="ml-auto dot"></div>
                    </label>
                </div>
            </div>
        </>
    )
}
export default PaymentList