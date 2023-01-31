import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    // add to cart food
    const AddToCart = () => {
        return navigate("/cart")
    }
    return (
        <>
            {/* food price and add to cart */}
            <section className="bg_dark">
                <div
                    className="flex justify-between items-center bg_mirage w-full px-5 sm:px-14 py-7 fixed bottom-0">
                    {/* price */}
                    <p className="text-xl text-gray-50 font-bold">$14,50</p>
                    {/* add to cart */}
                    <button type="button" className="bg_red_coral text-white font-bold px-14 py-4 rounded-2xl"
                            onClick={AddToCart}>Add to
                        cart
                    </button>
                </div>
            </section>
        </>
    )
}
export default Footer