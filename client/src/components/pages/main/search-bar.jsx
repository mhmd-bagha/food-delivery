import {CiFilter, CiSearch} from "react-icons/ci";
import {useRef} from "react";

const SearchBar = ({search, foods_cache, getFoodsCache}) => {

    const food_search = useRef(null) // get ref search input

    const getFoodsAfterSearch = (e) => {
        return (e.currentTarget.value.length === 0) && getFoodsCache(foods_cache) // if length search input equal 0, foods cache replace state original foods
    }

    const searchFood = () => {
        let input_search = food_search.current
        return (input_search.value !== '') && search(input_search.value) // if length search input not equal 0, get search food
    }

    return (
        <>
            <div className="flex justify-between mt-7 gap-6">
                <div className="flex w-full">
                    {/* search icon */}
                    <CiSearch className="absolute ml-3 mt-3 color-auro_metal_saurus" size={23}/>
                    {/* search input */}
                    <input type="text" className="w-full rounded-2xl bg_mirage pl-16 outline-none text-gray-300"
                           placeholder="Search" ref={food_search} onKeyUp={getFoodsAfterSearch}/>
                </div>
                {/* search button */}
                <button type="button" className="bg_red_coral p-4 rounded-xl"
                        onClick={searchFood}>
                    <CiFilter className="text-white" size={20}/>
                </button>
            </div>
        </>
    )
}
export default SearchBar