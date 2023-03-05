import {NavLink, useParams} from "react-router-dom";
import {useCallback, useEffect} from "react";

const FoodCategory = ({getCategoryFood, foodCategory, getFood, foods_cache, setFoodsCache}) => {
    let {categoryId} = useParams()
    categoryId = parseInt(categoryId) // change typeof to int

    // search category when clicked the link category
    const searchFoodByCategory = useCallback((category_id) => {
        setFoodsCache(foods_cache)
        getFood(category_id)
    }, [foods_cache, getFood, setFoodsCache])

    // search category when exist category id in url
    const getFoodByCategoryId = useCallback(() => {
        return (typeof categoryId !== 'undefined') ?? searchFoodByCategory(categoryId)
    }, [categoryId, searchFoodByCategory])

    useEffect(() => {
        getCategoryFood()
        getFoodByCategoryId()
    }, [getCategoryFood, getFoodByCategoryId])


    return (<>
        <div className="flex gap-10 mt-7 overflow-x-scroll py-3 color-auro_metal_saurus text-lg">

            <NavLink to='/' className="food_category" onClick={() => setFoodsCache(foods_cache)}>all</NavLink>

            {foodCategory.data && foodCategory.data.map((category, index) => (
                <NavLink to={`/category/${category.category_name}/${category.id}`} className="food_category"
                         onClick={() => searchFoodByCategory(category.id)}
                         key={index}>{category.category_name}</NavLink>
            ))}
        </div>
    </>)
}

export default FoodCategory