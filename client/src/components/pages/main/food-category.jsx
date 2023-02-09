import {NavLink} from "react-router-dom";
import {useEffect} from "react";

const FoodCategory = ({getCategoryFood, foodCategory}) => {

    useEffect(() => {
        getCategoryFood()
    }, [])

    return (<>
        <div className="flex gap-10 mt-7 overflow-x-scroll py-3 color-auro_metal_saurus text-lg">
            {foodCategory.data && foodCategory.data.map((category, id) => (
                <NavLink to={'/category/' + category.category_name} className="food_category"
                         key={id}>{category.category_name}</NavLink>
            ))}
        </div>
    </>)
}

export default FoodCategory