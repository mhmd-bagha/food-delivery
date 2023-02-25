import {NavLink, useParams} from "react-router-dom";
import {useEffect} from "react";

const FoodCategory = ({getCategoryFood, foodCategory, getFood, foods_cache, setFoodsCache}) => {
    let {categoryId} = useParams()

    useEffect(() => {
        getCategoryFood()
        getFoodByCategoryId()
    }, [])
    // search category when clicked the link category
    const searchFoodByCategory = (category_id) => {
        setFoodsCache(foods_cache)
        getFood(category_id)
    }
    // search category when exist category id in url
    const getFoodByCategoryId = () => {
        if (typeof categoryId !== 'undefined') {
            categoryId = parseInt(categoryId)
            searchFoodByCategory(categoryId)
        }
    }

    return (<>
        <div className="flex gap-10 mt-7 overflow-x-scroll py-3 color-auro_metal_saurus text-lg">
            {foodCategory.data && foodCategory.data.map((category, index) => (
                <NavLink to={`/category/${category.category_name}/${category.id}`} className="food_category"
                         onClick={() => searchFoodByCategory(category.id)}
                         key={index}>{category.category_name}</NavLink>
            ))}
        </div>
    </>)
}

export default FoodCategory