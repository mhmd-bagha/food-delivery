import Header from "./header";
import FoodData from "./food-data";
import FoodDescription from "./food-description";
import Footer from "./footer";

const Food = () => {
    return (<>
            <section className="bg_dark">
                <div className="bg_mirage px-12 pt-8 rounded-b-main">
                    {/* header */}
                    <Header/>
                    {/* food data */}
                    <FoodData/>
                </div>
            </section>
            {/* food description */}
            <FoodDescription/>
            {/* food price and add to cart */}
            <Footer/>
        </>)
}
export default Food