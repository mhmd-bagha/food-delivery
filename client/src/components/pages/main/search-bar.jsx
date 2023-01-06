import {CiFilter, CiSearch} from "react-icons/ci";

const SearchBar = () => {
    return (
        <>
            <div className="flex justify-between mt-7 gap-6">
                <div className="flex w-full">
                    <CiSearch className="absolute ml-3 mt-3 color-auro_metal_saurus" size={23}/>
                    <input type="text" className="w-full rounded-2xl bg_mirage pl-16 outline-none text-gray-300" placeholder="Search"/>
                </div>
                <button type="button" className="bg_red_coral p-4 rounded-xl"><CiFilter className="text-white" size={20}/></button>
            </div>
        </>
    )
}
export default SearchBar