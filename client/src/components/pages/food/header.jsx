import {FiHeart} from "react-icons/fi";
import Back from "../../tools/back";
import {useEffect} from "react";

const Header = ({addFavorite, foodId, userId, favorite}) => {
    // default color icon add to favorite
    let defaultColor = 'text-white'

    const addFoodFavorite = () => {
        addFavorite({food_id: foodId, user_id: userId})
        setColorFavorite('color-red_coral')
    }


    const existFoodFavorite = () => {
        foodId = parseInt(foodId) // change typeof food id to int
        let existFavorite = favorite.find(({id, user_id}) => user_id === userId && id === foodId) // check exist food in favorite
        defaultColor = (existFavorite) ? defaultColor = 'color-red_coral' : defaultColor
        setColorFavorite(defaultColor)
    }
    // set color
    const setColorFavorite = (color) => {
        const favorite_icon = document.getElementById('favorite_icon')
        return favorite_icon.classList.add(color)
    }

    useEffect(() => {
        existFoodFavorite()
    }, [existFoodFavorite])

    return (
        <>
            {/* header */}
            <div className="flex justify-between">
                <Back/>
                <button type="button" className="bg_dark p-2.5 rounded-2xl border border-gray-700"
                        onClick={addFoodFavorite}><FiHeart size={17} id='favorite_icon'/>
                </button>
            </div>
        </>
    )
}
export default Header