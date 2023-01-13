import Footer from "./footer";
import "./styles.scss";
import "../../../styles/forms.scss";
import PaymentList from "./payment-list";
import Header from "./header";
import CouponTaxation from "./coupon-taxation";

const Payment = () => {
    return (
        <>
            {/* background full */}
            <section className="bg_mirage min-h-full">
                {/* start page */}
                <div className="bg_dark px-12 pt-8 h-5/6 rounded-b-main">
                    {/* header */}
                    <Header/>
                    {/* payment select list */}
                    <PaymentList/>
                    {/* coupon code and taxation */}
                    <CouponTaxation/>
                </div>
                {/* total price and next top level */}
                <Footer/>
            </section>
        </>
    )
}
export default Payment