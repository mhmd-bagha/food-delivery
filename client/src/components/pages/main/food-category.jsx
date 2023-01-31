import {NavLink} from "react-router-dom";

const FoodCategory = () => {
    return (
        <>
            <div className="flex gap-10 mt-7 overflow-x-scroll py-3 color-auro_metal_saurus text-lg">
                <NavLink to='/category/Pizza' className="food_category">Pizza</NavLink>
                <NavLink to='/category/Humber' className="food_category">Humber</NavLink>
                <NavLink to='/' className="food_category">Sushi</NavLink>
                <NavLink to='/category/Kebab' className="food_category">Kebab</NavLink>
                <NavLink to='/category/Soup' className="food_category">Soup</NavLink>
            </div>
        </>
    )
}
export default FoodCategory